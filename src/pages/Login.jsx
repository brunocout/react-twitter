import { useState, useContext } from 'react'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { context } from '../context/Datareq'
import './Login.css'

const Login = () => {

    const navigate = useNavigate()
    const cont = useContext(context)
    const [searchTerm, setSearchTerm] = useState('')

    const requestLogin = async (user) => {
        fetch('https://api.github.com/users/' + user).then(
            res => res.json()
        ).then(data => {
            cont.setUserData(data)
            navigate('/home')
        }).catch(err => {
            console.log(err)
        })
    }

    const handleSearch = () => {
        requestLogin(searchTerm)
        setSearchTerm('')
    }

    return (
        <>
            <div className="container">
                <FaGithub className='github-icon'/>
                <h1>React-Twitter</h1>
                <div className='login-area'>
                    <input type="text" placeholder='Login w/ github user...' onChange={e => setSearchTerm(e.target.value)} value={searchTerm}/>
                    <button onClick={handleSearch}>Login</button>
                </div>
            </div>
            <footer>
                Made with <span role="img" aria-label="Coração">💙</span>by Bruno Coutinho. <br />
                Data by Github.
            </footer>
        </>
    );
}
 
export default Login;