function updateSizeJudul() {
  if (window.scrollY < 50) {
    elTitle.classList.remove("hidden");
    wrapperTitle.appendChild(elTitle);
    elTitle.style.scale = `${(window.scrollY / 50) * 100 + 50}%`;
  } else if (window.scrollY > 50 && window.scrollY < 70) {
    elTitle.classList.remove("hidden");
    wrapperTitle.appendChild(elTitle);
    elTitle.style.scale = `${100 + 50}%`;
  } else if (window.scrollY > 70 && window.scrollY < 130) {
    elTitle.classList.remove("hidden");
    wrapperTitle.appendChild(elTitle);
    elTitle.style.scale = `${(window.scrollY / 70) * 100 + 50}%`;
  } else if (window.scrollY > 130) {
    elTitle.classList.add("hidden");
    setTimeout(function () {
      if (window.scrollY > 130) {
        elTitle.remove();
      }
    }, 500);
  }
  // document.title = window.scrollY;
}
