import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import './Footer.css'

class Footer extends React.Component {

    render () {
        const bgGrey = {backgroundColor: '#9e9e9e'}

      return (
        <MDBFooter style={bgGrey} className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Lorenzo Dandrea</h5>
                <p>
                    This website was created by Lorenzo Dandrea to showcase his abilities as a programmer.
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">To Learn More See Below</h5>
                <ul>
                  <li className="list-unstyled">
                    <MDBIcon fab
                    icon="linkedin-in"
                    className="white-text">
                    </MDBIcon>
                    <a href="https://www.linkedin.com/in/lorenzo-dandrea-41b720157/" target='_blank'>   LinkedIn</a>
                  </li>
                  <li className="list-unstyled">
                    <MDBIcon fab
                    icon="github"
                    className="white-text">
                    </MDBIcon>
                    <a href="https://github.com/baronvontoby" target='_blank'>   GitHub</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.lorenzocodes.com"> lorenzocodes.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      );
    }
}


export default Footer;