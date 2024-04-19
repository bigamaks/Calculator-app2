const toggle = document.querySelector(".switch");
const outer = document.querySelector(".outer");
const background = document.querySelector(".container");
const display = document.querySelector("form input.display");
const calculator = document.querySelector(".calc-main");
const operator = document.querySelectorAll(".operator");
const equator = document.querySelector("#equator");
const numbers = document.querySelectorAll(".numbers-button");
const navigation = document.querySelectorAll(".nav-container");

// Variable to keep track of the toggle position
let position = 0;

// Function to move the toggle
function moveToggle() {
  if (position === 0) {
    toggle.style.transform = "translateX(120%)";
    toggle.style.backgroundColor = "hsl(25, 98%, 40%)";
    outer.style.backgroundColor = "hsl(0, 5%, 81%)";
    display.style.backgroundColor = "hsl(0, 0%, 93%)";
    display.style.color = "hsl(60, 10%, 19%)";
    background.style.backgroundColor = "hsl(0, 0%, 90%)";
    calculator.style.backgroundColor = "hsl(0, 5%, 81%)";
    operator.forEach((operator) => {
      operator.style.backgroundColor = "hsl(185, 42%, 37%)";
      operator.style.boxShadow = "0 3px 0 0 hsl(185, 58%, 25%)";
    });
    equator.style.backgroundColor = "hsl(25, 98%, 40%)";
    equator.style.boxShadow = "0 2px 0 0hsl(6, 70%, 34%)";
    numbers.forEach((numbers) => {
      numbers.style.color = "hsl(60, 10%, 19%)";
      numbers.style.backgroundColor = "hsl(45, 7%, 89%)";
      numbers.style.boxShadow = "0 3px 0 0 hsl(35, 11%, 61%)";
    });
    navigation.forEach((navigation) => {
      navigation.style.color = "hsl(60, 10%, 19%)";
    });
    position = 1;
  } else if (position === 1) {
    toggle.style.transform = "translateX(250%)";
    toggle.style.backgroundColor = "hsl(176, 100%, 44%)";
    outer.style.backgroundColor = "hsl(268, 47%, 21%)";
    display.style.backgroundColor = "hsl(268, 71%, 12%)";
    display.style.color = "hsl(52, 100%, 62%)";
    background.style.backgroundColor = "hsl(268, 75%, 9%)";
    calculator.style.backgroundColor = "hsl(268, 71%, 12%)";
    operator.forEach((operator) => {
      operator.style.backgroundColor = "hsl(281, 89%, 26%)";
      operator.style.boxShadow = "0 3px 0 0 hsl(290, 70%, 36%)";
    });
    equator.style.backgroundColor = "hsl(176, 100%, 44%)";
    equator.style.boxShadow = "0 3px 0 0 hsl(177, 92%, 70%)";
    numbers.forEach((numbers) => {
      numbers.style.color = "hsl(52, 100%, 62%)";
      numbers.style.backgroundColor = "hsl(268, 47%, 21%)";
      numbers.style.boxShadow = "0 3px 0 0 hsl(290, 70%, 36%)";
    });
    navigation.forEach((navigation) => {
      navigation.style.color = "hsl(52, 100%, 62%)";
    });
    position = 2;
  } else {
    toggle.style.transform = "translateX(0)";
    toggle.style.backgroundColor = "hsl(6, 63%, 50%)";
    outer.style.backgroundColor = "hsl(223, 31%, 20%)";
    display.style.backgroundColor = "hsl(224, 36%, 15%)";
    display.style.color = "hsl(0, 0%, 100%)";
    background.style.backgroundColor = "hsl(222, 26%, 31%)";
    calculator.style.backgroundColor = "hsl(223, 31%, 20%)";
    operator.forEach((operator) => {
      operator.style.backgroundColor = "hsl(225, 21%, 49%)";
      operator.style.boxShadow = "0 3px 0 0 hsl(224, 28%, 35%)";
    });
    equator.style.backgroundColor = "hsl(6, 63%, 50%)";
    equator.style.boxShadow = "0 2px 0 0 hsl(6, 70%, 34%)";
    numbers.forEach((numbers) => {
      numbers.style.color = "hsl(221, 14%, 31%)";
      numbers.style.backgroundColor = "hsl(30, 25%, 89%)";
      numbers.style.boxShadow = "0 3px 0 0 hsl(28, 16%, 65%)";
    });
    navigation.forEach((navigation) => {
      navigation.style.color = "hsl(0, 0%, 100%)";
    });
    position = 0;
  }
}

// Function to apply hover effect on equator
equator.addEventListener("mouseover", function () {
  if (position === 0) {
    equator.style.backgroundColor = "hsl(6, 70%, 54%)";
  } else if (position === 2) {
    equator.style.backgroundColor = "hsl(177, 92%, 70%)";
  } else {
    equator.style.backgroundColor = "hsl(25, 98%, 60%)";
  }
});

equator.addEventListener("mouseout", function () {
  if (position === 0) {
    equator.style.backgroundColor = "hsl(6, 63%, 50%)";
  } else if (position === 2) {
    equator.style.backgroundColor = "hsl(176, 100%, 44%)";
  } else {
    equator.style.backgroundColor = "hsl(25, 98%, 40%)";
  }
});

// Function to apply hover effect on toggle
toggle.addEventListener("mouseover", function () {
  if (position === 0) {
    toggle.style.backgroundColor = "hsl(6, 70%, 64%)";
  } else if (position === 2) {
    toggle.style.backgroundColor = "hsl(177, 92%, 70%)";
  } else {
    toggle.style.backgroundColor = "hsl(25, 98%, 60%)";
  }
});

toggle.addEventListener("mouseout", function () {
  if (position === 0) {
    toggle.style.backgroundColor = "hsl(6, 63%, 50%)";
  } else if (position === 2) {
    toggle.style.backgroundColor = "hsl(176, 100%, 44%)";
  } else {
    toggle.style.backgroundColor = "hsl(25, 98%, 40%)";
  }
});

// Function to apply hover effect on operators
function applyOperatorHoverEffect() {
  operator.forEach((operator) => {
    operator.addEventListener("mouseenter", function () {
      if (position === 0) {
        operator.style.backgroundColor = "hsl(225, 28%, 65%)";
      } else if (position === 1) {
        operator.style.backgroundColor = "hsl(185, 42%, 57%)";
      } else {
        operator.style.backgroundColor = "hsl(280, 89%, 35%)";
      }
    });

    operator.addEventListener("mouseleave", function () {
      if (position === 0) {
        operator.style.backgroundColor = "hsl(225, 21%, 49%)";
      } else if (position === 1) {
        operator.style.backgroundColor = "hsl(185, 42%, 37%)";
      } else {
        operator.style.backgroundColor = "hsl(281, 89%, 26%)";
      }
    });
  });
}

// Call the function to apply hover effect
applyOperatorHoverEffect();

// Function to apply hover effect on numbers
function applyNumberHoverEffect() {
  numbers.forEach((numbers) => {
    numbers.addEventListener("mouseenter", function () {
      if (position === 0) {
        numbers.style.backgroundColor = "white";
      } else if (position === 1) {
        numbers.style.backgroundColor = "white";
      } else {
        numbers.style.backgroundColor = "hsl(268, 66%, 50%)";
      }
    });

    numbers.addEventListener("mouseleave", function () {
      if (position === 0) {
        numbers.style.backgroundColor = "hsl(30, 25%, 89%)";
      } else if (position === 1) {
        numbers.style.backgroundColor = "hsl(45, 7%, 89%)";
      } else {
        numbers.style.backgroundColor = "hsl(268, 47%, 21%)";
      }
    });
  });
}

// Call the function to apply hover effect
applyNumberHoverEffect();

// Call moveToggle function every second
toggle.addEventListener("click", moveToggle);
