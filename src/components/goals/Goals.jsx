import React, { useState } from 'react';
import ChipButton from '../common/ChipButton';
import './goals.css';

const DEFAULT_GOALS = [
  'All',
  'Build a rainy day fund',
  'Save for a near-term expense',
  'Build long-term wealth',
  'Preserve wealth',
  'Buy a home',
  'Save for education',
  'Save for retirement',
  'Buy individual stocks',
  'Start investing',
];

function Goals({ title = "You choose the goal. We'll help you start.", goals = DEFAULT_GOALS, onChange }) {
  const [activeIdx, setActiveIdx] = useState(2);

  const handleClick = (idx, label) => {
    setActiveIdx(idx);
    if (onChange) onChange(label, idx);
  };

  return (
    <section className="goals">
      <div className="goals__container">
        <h3 className="goals__title">{title}</h3>
        <div className="goals__chips">
          {goals.map((g, idx) => (
            <ChipButton
              key={g}
              active={idx === activeIdx}
              onClick={() => handleClick(idx, g)}
              size="md"
            >
              {g}
            </ChipButton>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Goals;


