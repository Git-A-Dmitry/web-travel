class Modal {
  constructor() {
    this.openModalBtn = document.querySelector('.btn');
    this.modal = document.querySelector('.modal');
    this.closeModalBtn = document.querySelector('.modal__close');
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalBtn.onclick = this.openModal.bind(this);

    // clicking the x close modal button
    this.closeModalBtn.onclick = this.closeModal.bind(this);

    // pushes any key
  }

  openModal() {
    this.modal.classList.add('modal--is-visible');
  }

  closeModal() {
    this.modal.classList.remove('modal--is-visible');
  }
}
