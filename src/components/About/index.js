import React from 'react';
import github from '../../assets/img/github.svg';
import linkedin from '../../assets/img/linkedin.svg';

function About() {

    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={coverImage} roundedCircle />
            <div className="my-2">
                <p>Hello, my name is Steven Baty. Here is a portfolio I have created to show off my accomplishments and
                applications I have worked very hard on! For a little info about me, I married my best friend in June of
                2016. The wedding was where we first met up at Bear Lake, a very cute beach wedding! We have two very
                adorable fur babies and live in a modest first home. I have just completed a coding bootcamp through
                University of Utah for Full Stack Web Developer. I am very proud of myself and how far I have come
                during this process.</p>
                <p>I am looking to start a career instead of just having a job. I'm a very hard worker who is extremely
                eager to learn! I work very well in teams and can't wait to learn from and assist my future co-workers!
                I'm a very dedicated worker who loves to solve problems and search for solutions. Please enjoy looking
                through my completed work so far.</p>
            </div>
            <div>
                <img src={github} />
                <img src={linkedin} />
            </div>
        </section>
    )
}

export default About