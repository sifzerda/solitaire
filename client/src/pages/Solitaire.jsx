import profilePic from '../../public/images/propic.jpg';
import StockPile from '../components/StockPile';
import Foundations from '../components/Foundations';
import '../App.css';
import '../solitaire.css';

export default function About () {
  return (
    <div>
      <h1>Solitaire</h1>

      <p className="separator-line"></p>



      <div className="solitaire-box">
      {/* Content for the solitaire box can be added here */}

      <div className='white-box'>
      <StockPile />
      </div>

      <div className='white-box'>
      <Foundations /> 
      </div>







    </div>











      <div className="separator-line"></div>

    </div>
  );
}
