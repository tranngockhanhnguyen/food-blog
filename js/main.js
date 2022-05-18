function animateScroll() {
  const heightScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (heightScroll > 0) {
    window.requestAnimationFrame(animateScroll);
    window.scrollTo(0, heightScroll - heightScroll / 15);
  }
}

(() => {
  const menu = document.getElementById("toggleMenu");
  const navLinks = document.getElementById("navLinks");
  const hideBar = document.getElementById("hideBar");
  const barTop = document.getElementById("barTop");
  const barBottom = document.getElementById("barBottom");

  if (!menu) return;
  menu.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
    hideBar.classList.toggle("hide-bar");
    barTop.classList.toggle("rotate-bar-top");
    barBottom.classList.toggle("rotate-bar-bottom");
  });

  const scrollBtn = document.getElementById("scrollBtn");
  if (scrollBtn)
    window.addEventListener("scroll", () => {
      const windowHeight = window.scrollY;
      scrollBtn.style.visibility = windowHeight > 500 ? "visible" : "hidden";
    });

  scrollBtn.addEventListener("click", animateScroll);
})();
