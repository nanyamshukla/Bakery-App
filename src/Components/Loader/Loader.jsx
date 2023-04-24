import './Loader.scss';
import { LOADER_URL } from '../../constants';

function Loader() {
    return(
        <div className='loader-wrapper'>
            <img src={LOADER_URL} alt='Loading...' className='loader-gif'></img>
            <span className='loader-text'>Loading</span>
        </div>
    );
}

export default Loader;