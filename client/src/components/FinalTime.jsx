import React from 'react';

const FinalTime = ({ time }) => {
  return (
    <div className="final-time">
      <h2>Congratulations!</h2>
      <p>You won! Your time: {time}</p>
      {/* You can add additional styling or content here */}
    </div>
  );
};

export default FinalTime;