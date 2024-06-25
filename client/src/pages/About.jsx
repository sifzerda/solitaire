import StockPile from '../components/StockPile';
import Drag from '../components/Drag';
import '../App.css';
import '../solitaire.css';

export default function About () {
  return (
    <div className="center-container">
      <h1>Solitaire</h1>
      <p className='centered-text'>Ordo ab chao</p>


      <p className="separator-line"></p>


      <div className="solitaire-box">
 

      <div className='white-box'>
<Drag />
      </div>



       {/*         <Stockpile />       */}



    </div>



      <div className="separator-line"></div>

    </div>
  );
}
