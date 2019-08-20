import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import Lorenzo from '../../images/lorenzo1.jpg';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron id='contact' className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Time to Contact Lorenzo Dandrea</strong>
            </MDBCardTitle>

            <MDBCardImage
              src={Lorenzo}
              alt='me'
              className="img-fluid rounded mx-auto"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Lorenzo Dandrea
              </MDBCardTitle>
              <MDBCardText>
                Thank you for taking the time to view my website.  If you would like to get in touch with me see my email below.
                <br />
                <br />
                        Email: lgdandrea4@gmail.com
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                    <a href="https://www.linkedin.com/in/lorenzo-dandrea-41b720157/" target='_blank'><MDBIcon
                        fab
                        icon="linkedin-in"
                        className="grey-text"
                        size="lg"
                    /></a>
                    <a href="https://github.com/baronvontoby" target='_blank'><MDBIcon 
                        fab icon="github" 
                        className="grey-text"
                        size="lg"
                        />
                    </a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ContactPage;