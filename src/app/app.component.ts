import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  secretpassword = false;
  log: number[] = [];

  passwordSee(event : Event){
    this.secretpassword = !this.secretpassword;
    this.log.push(this.log.length + 1);
  }

  }
