import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Constantly Improving',
    text: 'I enjoy making great products myself and others can be proud of.',
  },
  {
    title: 'A Positive and Uplifting Professional',
    text: 'A great Team Worker ready to carry the load.',
  },
  {
    title: 'With a Humble Confidence',
    text: 'As much as I have learned, I always know there is infinity to discover.',
  },
  {
    title: 'Who can Get Work Done',
    text: 'A plethora of work ethic with breadth a parsec long (3.26 light-years).',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now. Step into it Today and Lets Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;