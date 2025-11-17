import React from 'react';
import './stats-box.css';

function StatsBox({ stats = [] }) {
  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <div className="statsBox">
      {stats.map((stat, index) => (
        <div key={index} className="statsBox__stat">
          <div className="statsBox__value">{stat.value}</div>
          <div className="statsBox__label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsBox;

