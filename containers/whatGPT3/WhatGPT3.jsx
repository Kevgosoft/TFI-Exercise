import React from 'react';
import './whatGTP3.scss';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Who is Kevin Oliveras" text="A Spirited Professional with decades of Computer Skills, Grit and Resourcefulness." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are limitless.</h1>
      <p>Lets Build the Future Together.</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Experience" text="The Work Ethic of a Seasoned Professional!" />
      <Feature title="Education" text="A Bachelor's Degree from Kansas State University in Computer Engineering!" />
      <Feature title="Self Driven" text="Motivated, Resourceful, and a Drive to Learn." />
    </div>
  </div>
)
}


export default WhatGPT3;