import React from 'react'
import './conversasChat.css'

function ConversasChat() {

    return (
        <div className="itens">
            <img className="images" src="https://www.w3schools.com/howto/img_avatar.png" alt="perfil" />
            <div className="conversations">
                <div className="conversations-line">
                    <div className="conversations-name">
                        Nome Usuário
                    </div>
                    <div className="conversations-date">
                        10:00
                    </div>
                </div>
                <div className="conversations-line">
                    <div className="conversations-message">
                        <div className="text-message">
                            Teste, Teste, Teste, Teste, Teste, Teste,
                            Teste, Teste, Teste, Teste, Teste, Teste,
                            Teste, Teste, Teste, Teste, Teste, Teste,
                            Teste, Teste, Teste, Teste, Teste, Teste,
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConversasChat;
