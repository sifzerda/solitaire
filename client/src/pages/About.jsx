import profilePic from '../../public/images/propic.jpg';
import '../App.css';
import '../scss.css';

import Notableau from '../components/Notableau';


export default function About () {
  return (
    <div>
      <h1>Solitaire</h1>

      <p className="separator-line"></p>

      <img className="profile-picture" src={profilePic} alt="Profile"  />

      <div className="separator-line"></div>

      <p className='portfolio-bio'>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.</p>
 

 <Notableau />



      <div className="separator-line"></div>


    </div>
  );
}
