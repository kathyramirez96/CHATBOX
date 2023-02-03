import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  
  constructor(
    
    ){
      const db = getFirestore();
      const docRef = db.collection('users').doc('alovelace');

    }
    

}
