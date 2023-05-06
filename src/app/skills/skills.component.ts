import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  progressBar = [
    {
      boxheading: 'HTML5'
    },
    {
      boxheading: 'CSS3'
    },
    {
      boxheading: 'SCSS/LESS'
    },
    {
      boxheading: 'JavaScript'
    },
    {
      boxheading: 'Angular JS'
    },
    {
      boxheading: 'Adobe Photoshop'
    },
    {
      boxheading: 'Adobe Illustrator'
    },
    {
      boxheading: 'Adobe XD'
    },
    {
      boxheading: 'Figma'
    }
  ]


  /* RANDOM COLOR OF BOXX */
  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 13)];
    }
    const styles = {
      'background-color' : color
    };
    return styles;
  }
}
