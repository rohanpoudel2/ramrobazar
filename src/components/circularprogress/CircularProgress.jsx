import './circularprogress.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ step }) => {

  return (
    <div style={{ width: '60px' }} >
      <CircularProgressbar value={step} text={`${step} of 4`} maxValue='4' styles={buildStyles({
        // Colors
        textColor: 'black',
        trailColor: 'lightgray',
        backgroundColor: 'white',
        pathColor: 'black'
      })} />
    </div>
  );
}

export default CircularProgress