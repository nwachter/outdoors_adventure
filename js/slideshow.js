window.onload = () => {
  var vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
)
var vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
)
// In HTML, .display-area has the width of 4 cards = 880px. Each card is 200px width and margin set to 10px.
// .display-area has a .cards-wrapper which contains all the cards. .cards-wrapper is set to display flex.
// .display-area has overflow hidden to hide the portion of cards-wrapper which extends beyond the container's width.

const wrapper = document.querySelector('.slideshow');
const slides = document.querySelector('.slide');
// console.log(wrapper.clientWidth);

// grab the dots
const dots = document.querySelectorAll('.dot');
// the default active dot num which is array[0]
let activeDotNum = 0;

dots.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
//   add a click event listener to each dot
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);
//     if the dot clicked is already active, then do nothing
    if(clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    }
    else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = wrapper.parentElement.clientWidth;
      // let pixels = -wrapper.clientWidth * clickedDotNum;
      // let pixels = -(displayArea /3) * clickedDotNum
      // let pixels = displayArea < 800 ? -(displayArea /1) * clickedDotNum 
      // : ((displayArea >= 800 && displayArea <= 1020) ? -(displayArea /2) * clickedDotNum 
      // : -(displayArea /3) * clickedDotNum)
       let pixels = -(displayArea /3) * clickedDotNum

       //quand vw < 800 translate de displayArea/1, quand vw >= 800, divisé par 2, et > à 1020 divisé par 3
      wrapper.style.transform = 'translateX('+ pixels + 'px)';
//       remove the active class from the active dot
      dots[activeDotNum].classList.remove('active');
//       add the active class to the clicked dot
      dots[clickedDotNum].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDotNum = clickedDotNum;
    }
    
  });
});

window.addEventListener('resize', (event) => {
  let displayArea = wrapper.parentElement.clientWidth;
  let pixels = -(displayArea /3) * 3
  wrapper.style.width = vw;
  console.log(vw)
  if (vw < 801) {
     wrapper.style.fl
      console.log('declenche 2 imgs')

  }
})


}

