import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ashish Soni - Front End Developer';

  visible:boolean = true
  
  onclick()
  {
    this.visible = !this.visible
  }
}
