import {
  animateText,
  onSideNavChange
} from '@common/library/animations/animations';
import { Component } from '@angular/core';
import { SidenavService } from '@services/library/sidenav.service';

@Component({
  animations: [onSideNavChange, animateText],
  selector: 'app-navigator-menu',
  templateUrl: './navigator-menu.html'
})

export class NavigatorMenuComponent {
  public sideNavState = false;
  public linkText = false;
  menu: any;

  constructor (
    private sidenavService: SidenavService
  ) {
    this.createMenu();
  }

  createMenu() {
    this.menu = [
      {
        title: 'menu.home',
        url: '/home',
        icon: 'dashboard'
      },
      {
        title: 'menu.settings',
        url: 'settigns',
        icon: 'settings'
      },
      {
        title: 'menu.register',
        url: 'register',
        icon: 'addClients'
      },
      {
        title: 'menu.sales',
        url: 'editorials',
        icon: 'newSale'
      }
    ];
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this.sidenavService.sideNavState$.next(this.sideNavState);
  }
}
