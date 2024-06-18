import '../App.css'; // Assuming these are global stylesheets
import '../solitaire.css'; // Additional stylesheet if needed

const Foundations = () => {
  return (
    <div className="card-stack-container">
      <h5>Foundations</h5>
      <div className="card-shaped-box">
        Box 1
      </div>
      <div className="card-shaped-box">
        Box 2
      </div>
      <div className="card-shaped-box">
        Box 4
      </div>
      <div className="card-shaped-box">
        Box 5
      </div>
    </div>
  );
};

export default Foundations;