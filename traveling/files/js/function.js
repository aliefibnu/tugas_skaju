function updateSizeJudul(){
  if (window.scrollY < 50) {
    elTitle.style.scale = `${(window.scrollY / 50) * 100 + 50}%`;
  } else if (window.scrollY > 70 && window.scrollY < 130) {
    elTitle.style.scale = `${(window.scrollY / 70) * 100 + 50}%`;
  }
}