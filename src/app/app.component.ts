import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  secretpassword = false;
  log: Date[] = [];

  passwordSee(event : Event){
    this.secretpassword = !this.secretpassword;
    /* this.log.push(this.log.length + 1); */
    //Utilizando Timestamp
    this.log.push(new Date());
  }

  }
