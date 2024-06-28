

const StartScreen = ({ onStartGame }) => {
  
    return (
      <div className="start-screen">
        <div className="start-screen-background">
        <div className="content">
        <p className="p-btn" onClick={onStartGame}> Start Game</p>
 
<br></br>
<br></br>
            <p className="p-btn" onClick={onStartGame}>High Scores</p>
            </div>
          </div>   
 
      </div>
    );
  };
  
  export default StartScreen;