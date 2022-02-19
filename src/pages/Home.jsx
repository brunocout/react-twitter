import React, { useContext } from 'react';
import './Home.css'
import { context } from '../context/Datareq'
import Sidebar from '../components/Sidebar';
import Homebar from '../components/Homebar';
import Trend from '../components/Trend';

const Home = () => {
    
    const data = useContext(context)

    return ( 
        <div className='home-container'>
                <div className='sidebar'>
                    <Sidebar img={data.userData?.avatar_url} name={data.userData?.name} user={data.userData?.login}/>
                </div>
                <div className='home'>
                    <Homebar img={data.userData?.avatar_url} name={data.userData?.name} user={data.userData?.login}/>
                </div>
                <div className='trend'>
                    <Trend />
                </div>
            </div>
    );
}
 
export default Home;