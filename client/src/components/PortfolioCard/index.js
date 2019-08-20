import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './PortfolioCard.css';

const PortfolioCard = props => {
  return (
    <MDBCol>
      <MDBCard id='portfolio' style={{ width: "22rem", height: '26rem' }}>
        <MDBCardImage id='ports' src={props.portfolio.image} alt={props.portfolio.name} />
        <MDBCardBody>
            <MDBCardTitle>{props.portfolio.name}</MDBCardTitle>
            <MDBCardText>
                {props.portfolio.description}
            </MDBCardText>
            <MDBBtn target='_blank' href={props.portfolio.url}>{props.portfolio.name}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default PortfolioCard;