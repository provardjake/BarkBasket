import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--blue-grey);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
`;

const ContentContainer = styled.div`
  margin-bottom: 4rem; /* Adjust the margin-bottom based on your content height */
`;

const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 2rem;
  background: var(--blue-grey);
  color: var(--white);
  z-index: 100;
  bottom: 0;
  position: fixed;
`;

export default function NavMenu() {
  return (
    <>
      <NavMenuStyles>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </NavMenuStyles>

      <ContentContainer>{}</ContentContainer>

      <FooterStyles>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </FooterStyles>
    </>
  );
}
