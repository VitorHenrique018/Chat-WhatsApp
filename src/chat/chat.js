import React, { Component } from 'react';
import './chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';


class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      valueMsg: 0,
    }
  }

  inputText = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        msg: event.target.value,
        valueMsg: 1,
      })
    }
  }


  render() {


    return (
      <div className="chat">
        <header className="headerChat">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="perfil" className="photo"></img>
          <div className="contact-chat">
            <div className="conversations-name">
              Nome Usuário
            </div>
            <div className="conversations-line">
              <div className="conversations-message">
                <div className="text-message">
                  Visto por último hoje às 10:00
              </div>
              </div>
            </div>
          </div>
          <div className="buttons" >
            <div className="buttons-icons ">
              <SearchIcon style={{ color: '#929198' }} />
            </div>
            <div className="buttons-icons ">
              <MoreVertIcon style={{ color: '#929198' }} />
            </div>
          </div>
        </header>

        <div className="messageLine">
          <div className="messageItem">
            <div className="messageText">Bla Bla Bla Bla Bla Bla</div>
            <div className="messageDate">10:00</div>
          </div>
        </div>

        <div className="messageLine">
          <div className="messageItem">
            <div className="messageText">Mensagem Recebida</div>
            <div className="messageDate">10:00</div>
          </div>
        </div>

        <div className="messageLine">
          <div className="messageItem">
            <div className="messageText">Mensagem Recebida</div>
            <div className="messageDate">10:00</div>
          </div>
        </div>

        {this.state.valueMsg > 0 && (
          <div className="messageLineSend">
            <div className="messageItemSend">
              <div className="messageTextSend">{this.state.msg}</div>
              <div className="messageDateSend">10:00</div>
            </div>
          </div>
        )}
        {this.state.valueMsg === 0 && (
          <div></div>
        )}

        <div className="input-message">
          <footer>
            <div className="input-message-text">
              <div className="message-input">
                <InsertEmoticonIcon fontSize="large" style={{ color: '#919191', marginRight: '15px' }} />
                <AttachFileIcon fontSize="large" style={{ color: '#919191', marginRight: '15px' }} />
                <input type="text" id="texto" onKeyPress={this.inputText} placeholder="Digite uma mensagem" ></input>

                <MicIcon fontSize="large" style={{ color: '#919191', marginRight: '15px' }} />
              </div>
            </div>
          </footer>
        </div>

      </div>
    );
  }
}

export default Chat;