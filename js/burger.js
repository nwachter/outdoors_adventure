window.onload = function () {

  var sidenav = document.getElementById("menu-list");
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");
  
  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;
  
  /* Set the width of the side navigation to 250px */
  function openNav() {
    sidenav.classList.add("active");
    closeBtn.classList.add("active");
    openBtn.classList.add("inactive");
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    closeBtn.classList.add("inactive");
    sidenav.classList.remove("active");
    openBtn.classList.remove("inactive");
    openBtn.classList.add("active");
  }
}
