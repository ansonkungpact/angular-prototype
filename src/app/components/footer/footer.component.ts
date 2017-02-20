import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,

} from '@angular/core';

import * as io from 'socket.io-client';
import 'jquery';

console.log('`Footer` component loaded asynchronously');

@Component({
  selector: 'global-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  public list;

  public socket: SocketIOClient.Socket;

  @ViewChild('chatList') public chatList: ElementRef;

  public ngOnInit() {
    console.log('init footer');
  }
  public ngAfterViewInit() {
    var chatbot = $('#chatbot');
    var chatWindow = chatbot.find('.chat-window');
    console.log($('body'));
    let socketUrl = 'https://ftlife-prototype.herokuapp.com/';
    this.socket = io.connect(socketUrl);

    // connect to socket.
    this.socket.on('connect', (socket) => {
      // call the server-side function 'adduser' and send one parameter (value of prompt)
      this.socket.emit('adduser');
    });

    // update user input.
    this.socket.on('updatechat_user', function (username, data) {
      chatWindow.append('<div class="chat-block user">' + data + '</div>');
    });

    // update bot response.
    this.socket.on('updatechat', function (username, data, typing, delay) {
      chatWindow.append('<div class="chat-block chatbot">' + data + '</div>');
    });
  }

  public sendMessage(inputmsg) {
    this.socket.emit('sendchat', inputmsg.value);
    inputmsg.value = '';
  }
}
