const hamburgerMenu = document.getElementById("handelOnClickMenu");
const menu = document.getElementById("handelOnClickMenuContents");

hamburgerMenu.addEventListener("click", () => {
  console.log("clicked");
  console.log(menu.classList);
});

window.addEventListener("load", function () {
  const carousel = document.getElementById("testimonialCarousel");

  function scrollCarousel() {
    if (window.innerWidth <= 768) {
      carousel.scrollLeft += carousel.scrollWidth / 4;
    }
  }

  setInterval(scrollCarousel, 5000); // Change automatically every 5 seconds
});
