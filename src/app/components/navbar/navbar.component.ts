import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuList = [
    {
      name: 'Admin',
      routerLink: '/admin'
    },
    {
      name: 'Reports',
      routerLink: '/reports'
    },
    {
      name: 'Batches',
      routerLink: '/batch-list',
    },
    {
      name: 'Surveys',
      routerLink: '/surveys',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
