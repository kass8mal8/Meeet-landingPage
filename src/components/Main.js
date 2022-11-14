import user_1 from '../Assets/Images/user_1.svg'
import user_2 from '../Assets/Images/user_2.svg'
import user_3 from '../Assets/Images/user_3.svg'
import user_5 from '../Assets/Images/user_5.svg'
import user_6 from '../Assets/Images/user_6.svg'
import '../Assets/styles/main.css'

const Main = () => {
    return (  
        <div className='main'>
            <div>
                <h1>Meeet New Entrepreneurs</h1>
                <aside>
                    <p>Meeet is a new social media platform for<br/> entrepreneurs to connect and socialize</p>
                    <button>Get notified at launch</button>
                </aside>
            </div>
            <div>
                <img src={user_1} alt="user" className='one'/>
                <img src={user_2} alt="user" className='two'/>
                <img src={user_3} alt="user" className='three'/>
                <img src={user_5} alt="user" className='five'/>
                <img src={user_6} alt="user" className='six'/>
            </div>
        </div>
    );
}
 
export default Main;