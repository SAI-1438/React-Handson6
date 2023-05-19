import { Link } from 'react-router-dom';
import './Style.css';


function Nav(){
    return(
        <div className='header'>
        <Link className='link' to='/'><i>Home</i></Link>
        <Link className='link' to='/Students'><i>Students</i></Link>
        <Link className='link' to='/Contact'><i>ContactUs</i></Link>
        </div>
    );
}
export default Nav;