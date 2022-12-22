class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll('.feature-item, .testimonial');
    // this.activeLink = document.querySelectorAll('.primary-nav li a');
    this.hideInitially();
    this.makeVisible();
    // this.activateLink();
  }

  hideInitially() {
    this.itemsToReveal.forEach((item) => {
      item.classList.toggle('hide-item');
    });
  }

  makeVisible() {
    this.itemsToReveal.forEach((el) => observer.observe(el));
  }

  // activateLink() {
  //   this.activeLink.forEach((el) => observer.observe(el));
  // }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-item');
    } else {
      entry.target.classList.remove('reveal-item');
    }
  });
});

// const hiddenElements = document.querySelectorAll('.feature-item');
// hiddenElements.forEach((el) => observer.observe(el));
