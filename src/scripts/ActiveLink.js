const changeNav = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
      document.querySelector('.active').classList.remove('active');
      var id = entry.target.getAttribute('id');
      var newLink = document.querySelector(`[href='#${id}']`).classList.add('active');
    }
  });
};

// init the observer
const options = { threshold: 0.55 };

const navObserver = new IntersectionObserver(changeNav, options);

// target the element to be observed
const sections = document.querySelectorAll('.large-hero, .page-section');
sections.forEach((section) => {
  navObserver.observe(section);
});
