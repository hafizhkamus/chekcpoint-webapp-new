import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-nav',
  templateUrl: './modern-nav.component.html',
  styleUrls: ['./modern-nav.component.scss']
})
export class ModernNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menu = [
    {
      name: 'Home',
      designation: '/home'
    },
    {
      name: 'About',
      designation: '/about'
    },
    {
      name: 'Contact',
      designation: '/contact'
    },
    {
      name: 'Schedule',
      designation: '/schedule'
    },
    {
      name: 'Account',
      designation: '/account'
    }
  ]

}
