import { Component } from '@angular/core';
import {} from '@angular/route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dispShow:boolean = false;

  showHome(){
    this.dispShow = true;
  }
}
