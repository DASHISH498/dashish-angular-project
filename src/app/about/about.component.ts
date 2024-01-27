import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public profileName = "Ashish Kumar Soni";
  public designationName = "Front End Developer"

  downloadPDF() {
    let link = document.createElement("a");
        link.download = "AshishResume.pdf";
        link.href = "assets/AshishResume.pdf";
        link.click();
  }
}
