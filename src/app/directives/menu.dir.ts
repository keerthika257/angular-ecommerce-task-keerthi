import { Component } from '@angular/core';

@Component({
  selector : 'menu',
  template : `
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-print-none">
  <a class="navbar-brand" href="#" routerLink = '/products'><img src="https://cdn.pixabay.com/photo/2015/11/06/15/13/internet-1028794_960_720.jpg" class="logo mr-2"/>Online Shopping</a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    </ul>
  </div>
</nav>
  `,

  styles:[`
    .logo{
      height: 60px;
      width: auto;
    }
  `]
})

export class MenuDir{

}