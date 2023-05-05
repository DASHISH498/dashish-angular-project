import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  serviceBOx = [
    {
      imgname: 'ui_ux_design',
      boxheading: 'UI/UX Design',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
    },
    {
      imgname: 'web_development',
      boxheading: 'Web Development',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
    },
    {
      imgname: 'reponsive_design',
      boxheading: 'Mobile Friendly',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
    },
    {
      imgname: 'graphic_design',
      boxheading: 'Graphic Design',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
    },
    {
      imgname: 'clean_code',
      boxheading: 'Clean Code',
      paragraph: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
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
