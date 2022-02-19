import React from 'react';
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaAlignLeft, FaRegUser, FaEllipsisH } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ img, name, user }) => {
    return ( 
        <div className='sidebar-container'>
            <div className='sidebarLogo'>
                <FaTwitter className='twitterLogo'/>
            </div>
            <div className='sidebarItems'>
                <ul>
                    <li><p><span>
                        <FaHome className='logo'/>
                    </span> Página Inicial</p></li>
                    <li><p><span><FaHashtag /></span> Explorar</p></li>
                    <li><p><span>
                        <FaBell />
                    </span> Notificações</p></li>
                    <li><p><span>
                        <FaEnvelope />
                    </span> Mensagens</p></li>
                    <li><p><span>
                        <FaBookmark />
                    </span> Itens salvos</p></li>
                    <li><p><span>
                        <FaAlignLeft />
                    </span> Listas</p></li>
                    <li><p><span>
                        <FaRegUser />
                    </span> Perfil</p></li>
                    <li><p><span>
                        <FaEllipsisH />
                    </span> Mais</p></li>
                </ul>
            </div>
            <div className='sidebarButton'>
                <button>Tweetar</button>
            </div>
            <div className='sidebarProfile'>
                <div className="img"><img src={img} alt={user} /></div>
                <div className='profileDetail'>
                    {name}
                    <p className='user'>@{user}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;