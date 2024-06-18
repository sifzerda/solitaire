import profilePic from '../../public/images/propic.jpg';
import StockPile from '../components/StockPile';
import '../App.css';
import '../solitaire.css';

export default function About () {
  return (
    <div>
      <h1>Solitaire</h1>

      <p className="separator-line"></p>

      <img className="profile-picture" src={profilePic} alt="Profile"  />

      <div className="separator-line"></div>

      <p className='portfolio-bio'>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
      </p>



<div className='grid-wrapper'>  
      <div className='white-box'>
      <StockPile />
</div>
</div>



      <div className="separator-line"></div>


    </div>
  );
}
