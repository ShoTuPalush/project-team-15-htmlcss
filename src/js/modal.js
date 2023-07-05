(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      openModalBtn2: document.querySelector("[data-modal-open2]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
  refs.modal.addEventListener('click', onBackdropClose);
  document.body.addEventListener('keydown', onEscClose);

  function onBackdropClose(e) {
     if (e.currentTarget !== e.target) {
      return;
    }
    toggleModal();
  };
  
  function onEscClose(e) {
      if (refs.modal.classList.contains("is-hidden")) {
      return;
    };
    if (e.key !== 'Escape') {
            return;
    }
    toggleModal();
  };

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
  };
  
  })();