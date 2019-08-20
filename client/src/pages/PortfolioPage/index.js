import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import PortfolioCard from '../../components/PortfolioCard';
import Pugs from './images/pugs.PNG';
import BikeNBrew from './images/bike_and_brew.PNG';
import GiphyFun from './images/disney-gif-application.PNG';
import Crystal from './images/crystal-game-application.PNG';
import Liri from './images/liri.PNG';
import Bamazon from './images/bamazon.PNG';
import Train from './images/train-time-application.PNG';
import Friend from './images/friendFinder.PNG';
import Burger from './images/burgerTime.PNG';

const images = [
    {Bamazon},
    {Pugs},
    {BikeNBrew},
    {GiphyFun},
    {Crystal},
    {Liri},
    {Train},
    {Burger},
    {Friend}
]


class PortfolioPage extends React.Component {
    
    state = {
        portfolios: [
            { 
                name: 'PUGS', 
                description: 'A social site where random people can meet up to find either an indoor or outdoor sport/board game to play.  The idea was formed by the lack of people cohesively available to play pick up hockey games during the winter.',
                image: images[1].Pugs,
                url: 'https://github.com/baronvontoby/PUGS4Life'
            },
            {
                name: 'Bike & Brew', 
                description: 'Who does not like to bike? Who also does not like to have a brew?  This website was created for the twin cities fast growing cycling community coupled with beer enthusiasts.  Enjoy!',
                image: images[2].BikeNBrew,
                url: 'https://github.com/johniblake/Bike-Brew'
            },
            {
                name: 'Giphy Fun', 
                description: 'A social site where random people can meet up to find either an indoor or outdoor sport/board game to play.  The idea was formed by the lack of people cohesively available to play pick up hockey games during the winter.',
                image: images[3].GiphyFun,
                url: 'https://baronvontoby.github.io/giphy-fun/'
            },
            {
                name: 'Crystal Game Application', 
                description: 'One of my very first logical achievements, a guess game using some of my very own fantastic graphics.',
                image: images[4].Crystal,
                url: 'https://baronvontoby.github.io/unit-4-game/'
            },
            {
                name: 'Liri Node Application', 
                description: 'A server side application that uses, user recognition to follow through on predetermined commands',
                image: images[5].Liri,
                url: 'https://github.com/baronvontoby/liri-node-app'
            },
            {
                name: 'Bamazon', 
                description: 'This was a really cool project, I made a fake amazon store using Node.js. This store continued to evolve until I created a pseudo user authentication feature for managers.',
                image: images[0].Bamazon,
                url: 'https://github.com/baronvontoby/bamazon'
            },
            {
                name: 'Train Time', 
                description: 'This was my first attempt to make a train scheduler that elapsed over time.  I used firebase to setup as the backend support for this application.  Unlike MySQL firebase is a little more trickier to use but still very useful.',
                image: images[6].Train,
                url: 'https://baronvontoby.github.io/train-time/'
            },
            {
                name: 'Burger Time', 
                description: 'This application used Handle Bars which was not my strongest technology.  Handlebars comes with its own set of rules that can make it tricky and definitely one of the toughest technologies I have learned.',
                image: images[7].Burger,
                url: 'https://github.com/baronvontoby/burger-time'
            },
            {
                name: 'Lets Make A Friend', 
                description: 'This was my frist attempt at making a friend matching alogrithim.  It didn\'t turn out quite like I had expected but it was a great first try and I had fun creating it.',
                image: images[8].Friend,
                url: 'https://github.com/baronvontoby/lets-make-a-friend'  
            }
        ]
    }
    render () {
        return (
            <MDBContainer>
                <MDBRow>
                        { 
                            this.state.portfolios.map((portfolio, id) => (
                                <PortfolioCard portfolio={portfolio} key={id} />
                            ))
                        }
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default PortfolioPage;