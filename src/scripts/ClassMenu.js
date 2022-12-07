// import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');

    this.menuIcon = document.getElementById('menu-icon');
    this.menuContent = document.getElementById('menu-content');
    this.events();
  }

  // events() {
  //   this.menuIcon.onclick = function () {
  //     console.log('La La La');
  //   };
  // }
  // =============================================
  // events() {
  //   this.menuIcon.onclick = this.toggleTheMenu;
  // }

  // toggleTheMenu() {
  //   console.log('Hooray!!!');
  // }
  // =============================================

  events() {
    this.menuIcon.onclick = this.toggleTheMenu.bind(this);
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    this.siteHeader.classList.toggle('site-header--is-expanded');
  }
}
