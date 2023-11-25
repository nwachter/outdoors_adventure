window.onload = function () {
  var nav = document.getElementById('topnav');
  var smallNav = document.getElementById("menu-list");
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");
  var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  /* Set the width of the side navigation to 250px */
  function openNav() {
    smallNav.classList.add("active");
    closeBtn.classList.add("active");
    // openBtn.classList.add("inactive");
    // openBtn.classList.remove("active");   A DE COMMENTER DES LES TESTS FINIS
    nav.replaceChild(closeBtn, nav.childNodes[5]);
    
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    // closeBtn.classList.add("inactive");
    // openBtn.classList.remove("inactive");
    closeBtn.classList.remove("active");
    smallNav.classList.remove("active");
    openBtn.classList.add("active");

    nav.replaceChild(openBtn, nav.childNodes[5]);
  }

  //Si menu actif et changement taille browser : remove active

  window.addEventListener("resize", (event) => {
    console.log(vw);
    if (vw > 801) {
      console.log('declenche');

      smallNav.classList.remove("active");
      closeBtn.classList.remove("active");
      // openBtn.classList.remove("active");
    }
  });

  /* openBtn doit seulement ne pas etre actif quand menu ouvert; en tps normal, il est actif + placé à -100px */

// if (document.readyState =! "loading") {
//   if (vw > 801) {
//     openBtn
//   }
//} 


}
