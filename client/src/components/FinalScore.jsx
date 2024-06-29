const FinalScore = ({ timer }) => {
    return (
      <div className='final-container'>
        <h1>game completed!</h1>
        <p className='timer'>Your time was: {timer}</p>
      </div>
    );
  };
  
  export default FinalScore;