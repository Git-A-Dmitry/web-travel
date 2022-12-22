const changeNav = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
      document.querySelector('.active').classList.remove('active');
      var id = entry.target.getAttribute('id');
      document.querySelector(`[href='#${id}']`).classList.add('active');
    }
  });
};

const options = { threshold: 0.55 };

const navObserver = new IntersectionObserver(changeNav, options);

const pages = document.querySelectorAll('.page-section');
pages.forEach((page) => {
  navObserver.observe(page);
});
