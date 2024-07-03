import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '../images/home.jpg';
const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;

const HeroSection = styled.header`
  text-align: center;
  padding: 50px 20px;
  margin-top : 20vh;
  height : 54vh;
  color : white;
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`;

const CtaButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;



export const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <h1>Advanced Fraud Detection System</h1>
        <p>Protecting Your Transactions with Cutting-Edge Machine Learning</p>
        <CtaButton to="/about">Get Started</CtaButton>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;
