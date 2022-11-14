import user_4 from '../Assets/Images/user_4.svg'
import twitter from '../Assets/Images/Twitter.svg'
import '../Assets/styles/footer.css'

const Footer = () => {
    return ( 
        <div className='footer'>
            <ul>
                <li>
                    <img src={twitter} alt="twitter" className='twitter'/>
                </li>
                <li>Follow us on Twitter</li>
            </ul>
            <li>
                <img src={user_4} alt="user" className='four'/>
            </li>
        </div>
     );
}
 
export default Footer;