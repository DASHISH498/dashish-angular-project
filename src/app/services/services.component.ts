import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  serviceBOx = [
    {
      imgname: 'ui_ux_design',
      boxheading: 'UI/UX Design',
      paragraph: 'Creating visually appealing and user-friendly digital interfaces for seamless and engaging experiences.'
    },
    {
      imgname: 'web_development',
      boxheading: 'Web Development',
      paragraph: 'Building and maintaining websites using programming languages, frameworks, and tools to deliver functional and interactive online experiences.'
    },
    {
      imgname: 'reponsive_design',
      boxheading: 'Mobile Friendly',
      paragraph: 'Creating websites that adapt and display seamlessly on various devices, providing an optimal user experience across different screen sizes.'
    },
    {
      imgname: 'graphic_design',
      boxheading: 'Graphic Design',
      paragraph: 'Visual communication through the use of typography, imagery, and layout to convey messages effectively and captivate audiences.'
    },
    {
      imgname: 'clean_code',
      boxheading: 'Clean Code',
      paragraph: 'Developing software solutions with a focus on writing clear, organized, and maintainable code for efficient and sustainable development.'
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
