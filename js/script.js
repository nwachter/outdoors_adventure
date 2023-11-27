window.onload = () => {
  const mainContainer = document.getElementById('main-projects');

  console.log(mainContainer);

  if (mainContainer) {
    mainContainer.addEventListener('click', handleClick)
  }


  function handleClick(e) {
    dotContainer = e.target.parentElement.parentElement;
    const wrapper = dotContainer.querySelector('.slideshow');
    const slides = dotContainer.querySelectorAll('.slide');
    const dots = dotContainer.querySelectorAll('.dot');

    let activeDotNum = 0;

    dots.forEach((dot, idx) => {
      dot.setAttribute('data-num', idx);
      dot.addEventListener('click', (e) => {
        let clickedDotNum = e.target.dataset.num;
        if (clickedDotNum == activeDotNum) {
          return;
        }
        else {
          var vw = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
          )
          var vh = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
          )
          let displayArea = wrapper.parentElement.clientWidth;
          let numberOfSlides = vw < 799 ? 1 : (vw >= 800 && vw < 1020 ? 2 : 3)
          let pixels = -(displayArea / numberOfSlides + 10) * clickedDotNum

          wrapper.style.transform = 'translateX(' + pixels + 'px)';
          dots[activeDotNum].classList.remove('active');
          dots[clickedDotNum].classList.add('active');

          activeDotNum = clickedDotNum;
        }

      });
    });

  }


  var nav = document.getElementsByTagName('nav')[0]
  console.log(nav)
  var menuList = document.getElementById('menu-list')
  var smallNav = document.getElementsByClassName('small-nav')[0]
  var openBtn = document.getElementById('openBtn')
  var closeBtn = document.createElement('a')

  var htmlString = '<svg class="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style=""><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" style=""></path></svg>'.trim()
  closeBtn.innerHTML = htmlString
  closeBtn.id = 'closeBtn'

  openBtn.onclick = openNav
  closeBtn.onclick = closeNav

  function openNav() {
    menuList.classList.add('active')
    closeBtn.classList.add('active')
    openBtn.classList.remove('active');
    nav.style.minHeight = '285px';
    replace(closeBtn)
  }

  function closeNav() {
    closeBtn.classList.remove('active')
    menuList.classList.remove('active')
    openBtn.classList.add('active')
    nav.style.minHeight = '70px';
    replace(openBtn);
  }


  function replace(childNode) {
    let willReplaceByOpen = childNode.id.includes("openBtn") ? true : false
    if (willReplaceByOpen) {
      for (let i = 0; i < smallNav.childNodes.length; i++) {
        if (smallNav.childNodes[i].nodeName != "#text") {
          if (smallNav.childNodes[i].id.includes("closeBtn")) {
            smallNav.replaceChild(openBtn, smallNav.childNodes[i])
          }
        }
      }
    }
    else {
      for (let i = 0; i < smallNav.childNodes.length; i++) {

        if (smallNav.childNodes[i].nodeName != "#text") {
          if (smallNav.childNodes[i].id.includes("openBtn")) {

            smallNav.removeChild(smallNav.childNodes[i]);
            smallNav.appendChild(closeBtn);
          }
        }
      }
    }

  }

  window.addEventListener('resize', (event) => {
    nav.style.minHeight = '70px';
    closeNav()
    var vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
    var vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
  })
}


