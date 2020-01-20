import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNavbarCollapsed = true;
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyAOVmSgZi9x1lm8Hl9CrK5BGxXras6Wasc',
      authDomain: 'wasabi-288c2.firebaseapp.com',
      databaseURL: 'https://wasabi-288c2.firebaseio.com',
      projectId: 'wasabi-288c2',
      storageBucket: 'wasabi-288c2.appspot.com',
      messagingSenderId: '320608389318',
      appId: '1:320608389318:web:df71a5a5cb9052167eafc7'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }


}
