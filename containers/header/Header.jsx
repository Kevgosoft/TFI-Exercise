import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.scss';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Building Something Amazing For TFI Foster Care and Child Welfare Services!</h1>
      <p>A Demonstration of Skills!</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>Serving the Community. We can build it together.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="AI Head" />
    </div>
  </div>
);

export default Header;