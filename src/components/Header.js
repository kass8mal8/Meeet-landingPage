import logo from '../Assets/Images/Logo.svg'

const Header = () => {
    return ( 
        <div>
            <img src={logo} alt="logo" className='logo' />
        </div>
     );
}
 
export default Header;