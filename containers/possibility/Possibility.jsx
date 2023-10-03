import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.scss';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Always keeping ahead of the future</h4>
      <h1 className="gradient__text">Kevin Oliveras <br /> can get the job done!</h1>
      <p>As a Technical Support Specialist I discovered and solved a major software bug in CivicRec, saving countless Team hours. </p> 
      <p>As bakery manager I posted a record sales week with my Team, working baking incomprehensibly.</p>
      <h4>Thank you for the Opportunity!</h4>
    </div>
  </div>
);

export default Possibility;