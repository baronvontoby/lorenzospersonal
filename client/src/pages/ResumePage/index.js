import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";
import './ResumePage.css';

const ResumePage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron id='resume'>
            <MDBCardBody>
              <MDBCardTitle className="h2">
                Resume for Lorenzo Dandrea 
              </MDBCardTitle>
              <p className="blue-text my-4 font-weight-bold">
                lgdandrea4@gmail.com
              </p>
              <MDBCardText>
                <MDBCardTitle className='h4'>
                    Personal Statement
                </MDBCardTitle> 
                <hr className='my-4' />
                <p>I am a self described technology enthusiast and hobbyist who enjoys spending time learning and making applications . 
                    Now I have turned this hobby and passion into a career and have taken the next steps by attending a coding bootcamp 
                    through the University of Minnesota learning full stack web development.  
                    This experience has prepared me to tackle end to end programming, from MongoDB and SQL database creation and 
                    deployment to utilizing react.js and JavaScript for front end functionality. 
                    The intense process of the bootcamp has prepared me to not only deliver quality work but learn quickly 
                    and find answers efficiently on any new technologies that might be necessary.  
                    With my background in customer relationships, communication and teamwork, I am able to work well in a team structure 
                    while also maintaining an independent work ethic and managing my time efficiently.</p>
                <hr className='my-4'/>
                <MDBCardTitle className='h4'>
                    Education
                </MDBCardTitle>
                <hr className='my-4' />
                <p>
                    <ul>
                        <li>
                            University of Minnesota, Saint Paul, Minnesota from April 2019 - July 2019 : Graduated
                            <br />
                            Full Stack Web Development Coding Bootcamp
                        </li>
                        <li>
                            Saint Mary's University of Minnesota, Winona, Minnesota 2006 - 2010 : Graduated
                            <br />
                            Bachelor's in History with a minor in Political Science
                        </li>
                    </ul>
                </p>
                <hr className='my-4' />
                <MDBCardTitle className='h4'>
                    Skills
                </MDBCardTitle>
                <hr className='my-4' />
                <p>
                MERN Stack (Express.js, Node.js, React.js, MongoDB), Heroku, JQuery, Git, GitHub, Firebase, Handlebars, Angular, HTML5, JavaScript, Java, CSS, MySQL, 
                CSS Frameworks (Bootstrap, Materialize) 
                </p>
                <hr className='my-4' />
                <MDBCardTitle className='h4'>
                    Projects
                </MDBCardTitle>
                <hr className='my-4' />
                <p><strong>PUGS, Pick Up Games Application</strong>
                    <ul>
                        <li>
                        Undertook a complete reboot of the front end functionality of the application utilizing REACT.js and moving away from JQuery
                        </li>
                        <li>
                        Lead a team of 3 developers that turned the application into a SPA utilizing REACT
                        </li>
                        <li>
                        Created a web application that allows users to socially interact and find like minded people through pick up games.
                        </li>
                        <li>
                        Worked primarily on the back end Javascript routing, middleware handling and database implementation. 
                        </li>
                        <li>
                        Due to the smaller team I was also responsible for front end Javascript DOM manipulation. Looking to reincorporate React.js as we move forward for a more responsive application.
                        </li>
                        <li>
                        Worked on the user authentication team, utilizing Passport and also all external API calls using AJAX.
                        </li>
                        <li>
                        Developed a unique system, using the Reflect.OwnKeys method that overcomes an Object Null issue that was happening on our server side code that allowed me to successfully pass JSON from the DOM to my database utilizing Sequelize.
                        </li>
                        <li>
                        Took over project manager duties implementing daily Stand Ups to make sure we reached MVP within the given timeframe and also managed all pull and merge issues.
                        </li>
                        <li>
                        The project runs on my Express Server and we use Node to serve it.
                        </li>
                        <li>
                        I built our database utilizing MySQL and Sequelize to create tables and manage queries.
                        </li>
                    </ul>
                </p>
                <hr className="my-4" />
                <MDBCardTitle className='h4'>
                    Work Experience
                </MDBCardTitle>
                <hr className="my-4" />
                <p>
                <strong>Northern Widget LLC, Partner/Sales, Saint Paul, Minnesota				January 2010- Present</strong>
                <br />
                <ul>
                    <li>
                    Began a tech startup company focused on scientific data instruments
                    </li>
                    <li>
                    Taking initiative to bring a product successfully to market from the ground up
                    </li>
                    <li>
                    Successfully created and implemented the invoicing software and processed inventory for initial orders
                    </li>
                    <li>
                    Self-starter requiring time management skills, customer relationship building and money management
                    </li>
                </ul>
                <br />
                <br />
                <strong>Imagine IT Inc, Account Executive, Bloomington, Minnesota           		April 2018- March 2019</strong>
                <br />
                <ul>
                    <li>
                    Worked closely with ownership to roll out new Hubspot platform to increase inbound marketing efforts
                    </li>
                    <li>
                    Cold called potential prospects and qualified opportunities
                    </li>
                    <li>
                    Attended and managed trade show booths
                    </li>
                    <li>
                    Joined up with several networking groups that involved finance and technology personnel
                    </li>
                    <li>
                    Collaborated with second sales hire to implement new e-marketing campaigns and used video to reach leads
                    </li>
                </ul>
                <br />
                <br />
                <strong>Breakthru Beverage Minnesota, Sales Consultant, Saint Paul, Minnesota           		September 2013- April 2018</strong>
                <br />
                <ul>
                    <li>
                    Successfully maintained and grew a territory of 99 accounts while growing annual revenue at 7% year over year
                    </li>
                    <li>
                    Implemented persuasive selling techniques to grow business, through PowerPoint presentations and verbal pitches
                    </li>
                    <li>
                    Successfully selling in the total beverage system with the responsibility of selling three major books of wine, beer and spirits amounting to 7,500 different products
                    </li>
                    <li>
                    Self-starter that managed my own weekly schedule to ensure goals and deadlines are met 
                    </li>
                </ul>
                <br />
                <br />
                <strong>Warner Stellian, Sales Consultant, Woodbury, Minnesota                             		March 2011- September 2013</strong>
                <br />
                <ul>
                    <li>
                    Managed an open book of business of 1.5 million dollars a year, while meeting and exceeding company goals
                    </li>
                    <li>
                    Worked in a commission only environment
                    </li>
                    <li>
                    Worked with customer service as a team player to resolve customer issues
                    </li>
                    <li>
                    Worked with operations to successfully deliver product according to customer needs
                    </li>
                </ul>
                </p>            
              </MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <MDBBtn
                  outline
                  color="primary"
                  className="waves-effect"
                  href='../../assets/LorenzoDResume.pdf'
                  download='LorenzoDResume.pdf'
                >
                  Download <MDBIcon icon="download" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ResumePage;