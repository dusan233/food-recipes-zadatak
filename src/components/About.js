import React from 'react';
import teamImg from '../assets/team.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo unde, ea eligendi perspiciatis nostrum similique dolore nemo possimus eos eaque sed quidem magni cum excepturi cupiditate quasi sunt hic!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo unde, ea eligendi perspiciatis nostrum similique dolore nemo possimus eos eaque sed quidem magni cum excepturi cupiditate quasi sunt hic!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo unde, ea eligendi perspiciatis nostrum similique dolore nemo possimus eos eaque sed quidem magni cum excepturi cupiditate quasi sunt hic!
                </p>
                
            </div>
            <div className="about__img-container">
                <img src={teamImg} alt=""/>
            </div>
        </div>
    )
}

export default About