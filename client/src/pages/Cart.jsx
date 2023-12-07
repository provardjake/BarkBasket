import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Auth from "../utils/auth";
import { GET_ME } from '../utils/queries';
import { REMOVE_FROM_CART } from '../utils/mutations';
import { CHECKOUT } from '../utils/mutations';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Cart = () =>{
    const {loading, data} = useQuery(GET_ME);

    const [removeFromCart, {removeFromCartError}] = useMutation(REMOVE_FROM_CART);

    const [checkout, {checkoutError}] = useMutation(CHECKOUT);

    const userData = data?.me || {};

    const navigate = useNavigate();

    //gets the total price of the users cart and updates it when an item is removed
    const updateCartTotal = () =>{
        if(!Auth.loggedIn()){
            return
        }
        if(!loading){
            let cartTotal = 0;
            for(let i = 0; i < userData.cart.length; i++){
                cartTotal = cartTotal + userData.cart[i].price;
            }
            return cartTotal.toFixed(2);
        }

    }

    updateCartTotal();

    // deletes an item from the cart
    const handleDeleteFromCart = async (id) =>{
        const token = Auth.loggedIn() ? Auth.getToken : null;

        if(!token){
            return false;
        }

        try{
            const {data} = await removeFromCart({
                variables: {id}
            });

            window.location.reload();
        }
        catch(err){
            console.error(err);
        }
    }

    // checkouts the users current cart
    const handleCheckout = async () =>{
        const token = Auth.loggedIn() ? Auth.getToken: null;

        if(!token){
            return false;
        }

        try{
            const response = await checkout();
            navigate("/checkout");
            window.location.reload();
        }
        catch(err){
            console.error(err);
        }
        
    }

    //checks if the user is logged in or not. Doesn't display a cart if they are not logged in
    if(!Auth.loggedIn()){
        return <h2>Please Log in to see your cart</h2>
    }

    return(
        <main className='main-container'>
            <h2>Your Cart</h2>
            <h3>Total: ${updateCartTotal()}</h3>
            <Button variant='primary' onClick={() =>handleCheckout()}>Checkout</Button>
            <div>
                <div className='card-container'>
                    {loading ? (
                        <div>Loading...</div>
                    ): (
                        userData &&
                        userData.cart.map((product) =>(
                        <Card className="product-card" key= {product._id}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                                <Button variant="warning" onClick={() =>handleDeleteFromCart(product._id)}>Remove From Cart</Button>
                            </Card.Body>
                        </Card>
                        ))
                    )}
                </div>
            </div>
        </main>
    )
}

export default Cart;