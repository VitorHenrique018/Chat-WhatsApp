import React from 'react';
import '../../src/global.css'
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ConversasChat from '../conversas/conversasChat.js'

function Sidebar() {

    const chatlist = ([{}, {}, {}, {}, {}, {}, {}, {}, {}, {},]);

    return (
        <div className="sidebar">
            <header className="header">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="perfil" className="photo"></img>
                <div className="buttons" >
                    <div className="buttons-icons ">
                        <DonutLargeIcon style={{ color: '#929198' }} />
                    </div>
                    <div className="buttons-icons ">
                        <ChatIcon style={{ color: '#929198' }} />
                    </div>
                    <div className="buttons-icons ">
                        <MoreVertIcon style={{ color: '#929198' }} />
                    </div>
                </div>
            </header>

            <div className="search">
                <div className="search-input">
                    <SearchIcon fontSize="small" style={{ color: '#919191' }} />
                    <input type="text" placeholder="Pesquisar ou começar uma nova conversa"></input>
                </div>
            </div>

            <div className="conversations">
                {chatlist.map((index, key) => (
                    <ConversasChat
                        key={key}
                    />
                ))}
            </div>
        </div>

    );
}

export default Sidebar;
