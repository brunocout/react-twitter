import React, { useRef } from 'react';
import { FaRegStar, FaImage, FaRegFile, FaTasks, FaRegSmile, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Homebar.css'
import Post from './Post';

const Homebar = ({ img, name, user }) => {

    const inputRef = useRef(null)
    const arr = ['qwdasdasd', 'asdasdasdasd', 'asdasdasdasda']

    const handleInput = () => {
        const value = inputRef.current.value
        arr.push(value)
        console.log(arr)
    }
    
    return ( 
        <div className='homeBar'>
            <div className='homeHeader'>
                <div className="homeHead">
                    <h4>Página Inicial</h4>
                    <FaRegStar className='faStar'/>
                </div>
                <div className='homeInput'>
                    <img src={img} alt={name} className='imgHeader'/>
                    <input type="text" placeholder='O que está acontecendo ?' ref={inputRef} />
                </div>
                <div className="homeFooter">
                    <ul>
                        <li><FaImage /></li>
                        <li><FaRegFile /></li>
                        <li><FaTasks /></li>
                        <li><FaRegSmile /></li>
                        <li><FaRegCalendarAlt /></li>
                        <li><FaMapMarkerAlt /></li>
                    </ul>
                    <div className='homeButton'>
                        <button onClick={handleInput} >Tweetar</button>
                    </div>
                </div>
            </div>
            <div className='homePublish'>
                {arr.map(item => (<Post img={img} name={name} user={user} text={item}/>))}
            </div>
        </div> 
    );
}
 
export default Homebar;