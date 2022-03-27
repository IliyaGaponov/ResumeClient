import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  descriptions = [
    {
      small: "Hi! My name is", 
      big: "Iliya Gaponov", 
      desc: "  I’m a hardworking and dedicated person, love to explore, always have a big hunger for new knowledge. I love challenges, good team player, but also do great on my own.",
      button: "Contact Me",
      btnLink: "/contact"  
    },
    {
      small: "I am a Full-stack", 
      big: "Web Developer", 
      desc: "My main areas of expertise include Javascript, Typescript, C#, HTML, CSS, .Net and Angular.",
      button: "See my expirience",
      btnLink: "/experience"  
      
    },
    {
      small: "I also have", 
      big: "Different Hobbies", 
      desc: "efdsfdsfsdfsdf dsfefdsfdsfsdfsdfd sfefdsfdsfsdfsdfdsfef dsfdsfsdfsdfdsf",
      button: "See my works",
      btnLink: "/experience"
    }
  ];

  progress = 0;
  currDescIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.setSliderProgress();
    }, 150);
  }

  setSliderProgress() {
    if(this.progress > 100) {
      this.setCurrDescIndex();
      this.progress = 0;
    }
    this.progress+=2;

  }

  setCurrDescIndex() {
    this.currDescIndex = this.currDescIndex != this.descriptions.length - 1 ? this.currDescIndex + 1 : 0;
  }
}
