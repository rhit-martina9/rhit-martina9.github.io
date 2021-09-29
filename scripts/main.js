// Used https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671 for base of code
const scrollElementsLeft = document.querySelectorAll(".js-scroll-left");
const scrollElementsRight = document.querySelectorAll(".js-scroll-right");

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimationLeft = () => {
  scrollElementsLeft.forEach((el) => {
    if (elementInView(el, 50)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimationLeft();
});


const handleScrollAnimationRight = () => {
  scrollElementsRight.forEach((el) => {
    if (elementInView(el, 15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimationRight();
});