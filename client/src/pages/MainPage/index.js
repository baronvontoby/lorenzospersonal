import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardBody, MDBCardText } from "mdbreact";
import './MainPage.css';
import bioImg from '../../images/Bio_Photo.jpg';

const images = [{bioImg}];

class MainPage extends React.Component {
    render () {
        return (
            <div className='master-container'>
                <MDBContainer className="mt-5 text-center">
                    <MDBRow>
                        <MDBCol>
                            <MDBJumbotron className="text-center">
                            <MDBCardTitle className="card-title h4 pb-2">
                                <strong>A Little About Lorenzo Dandrea</strong>
                            </MDBCardTitle>
                            <MDBCardBody>
                                <img id='me' src={images[0].bioImg} className="img-fluid z-depth-2 rounded float-left" alt="alignment" />
                                <MDBCardTitle className="indigo-text h5 m-4">
                                A Coding Story
                                </MDBCardTitle>

                                <MDBCardText>
                                    For me coding has always been something that has just absolutely entranced me.  I grew up at the dawn of the internet
                                    age.  I remember the first computer my Dad brought home.  It operated on windows 93 and it had its optical drive connected to its monitor/main CPU.
                                    My family comes from modest beginnings and this had to have been a hand me down computer that also needed a partitioned floppy disk (remember those ugly things) just
                                    to hold the hard disk space to boot up the operating system.
                                    <br />
                                    <br />
                                    But for all of its short comings this was the beginnings of a life long passion.  I spent many hours tinkering over this machine and the many more that have come after it.
                                    How did it work? What were it's limits?  What is the command line and what can it do?  All these questions fueled my curiosity and over time I began building my own computers
                                    and learning how to create software on my own.
                                    <br />
                                    <br />
                                    Now 20 years later I embark on my next leg of this journey.  Having years of success in sales and business development I recognized (or my wife recognized) that I was
                                    missing something.  That something I was missing had been in front of me all my life.  The few things I have come to learn about myself are that I appreciate three things in life.
                                    <br />
                                    <br />
                                    <ul>
                                        <li>
                                            I like to communicate and be social with other people which lead me to be successful in sales and work well with teams
                                        </li>
                                        <li>
                                            Loyalty and commitment to something, without these you have no purpose which makes me lead with my heart on its sleeve
                                        </li>
                                        <li>
                                            Finally I have an unending thirst to create and make something, which was something I have yet to find in my professional career
                                        </li>
                                    </ul>
                                    <br />
                                    <br />
                                    It is that last bit that I have found in my next chapter.  The ability to create something.  Coding was alwasy a hobby and the excitement
                                    I would get from starting a new project and putting all the boiler plate things together was monumental. Starting a project and working with others
                                    to bring it across the finish line is what I am meant to do and what I am capabale of doing. I left a career in my prime to pursue what has been a passion of
                                    mine.  Not many can say that they left something good to take a risk and I believe that just continues to add to this story of my life and I am excited to see
                                    where it takes me.
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
          </div>
        )
    }
}

export default MainPage;