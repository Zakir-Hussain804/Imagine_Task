 alert("run the code")
   const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    const menu = document.querySelector('.menu');

    openMenu.addEventListener('click', () => {
      menu.classList.add('open');
      openMenu.style.display = 'none';
      closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', () => {
      menu.classList.remove('open');
      closeMenu.style.display = 'none';
      openMenu.style.display = 'block';
    });


    // using the slider;
    let slides = document.querySelectorAll(".slider-card")
    let index = 0;
    function Show(index) {
      slides.forEach((slides, i) => {
        slides.classList.toggle("active", i === index)
      })
    }
    function ShowNext() {
      index = (index + 1) % slides.length;
      Show(index)
    }
    setInterval(ShowNext, 3000)