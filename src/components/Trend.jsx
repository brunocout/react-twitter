import React from 'react';
import { FaSearch } from 'react-icons/fa'
import './Trend.css' 

const Trend = () => {
    return ( 
        <div className='trend-container'>
            <div className='trend-input'>
               <span><FaSearch /></span>
               <input type="text" placeholder='Busca no Twitter' />
            </div>
            <div className='trendfy'>
                <h1>O que está acontecendo</h1>
            </div>
        </div>
     );
}
 
export default Trend;