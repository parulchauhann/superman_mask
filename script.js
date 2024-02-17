/* Iteration 4: Make the Canvas App Functional */
/* Iteration 4: Make the Canvas App Functional */
// <!-- Ironman - background, helmet, eyes, face-plate  -->

const imgfaceplate = document.getElementById('face-plate');
const buttonfaceplate = document.getElementById('buttonfaceplate');

buttonfaceplate.oninput = () => {
  imgfaceplate.style.fill = buttonfaceplate.value;
};

const imghelmet = document.getElementById('helmet');
const buttonhelmet = document.getElementById('buttonhelmet');

buttonhelmet.oninput = () => {
  imghelmet.style.fill = buttonhelmet.value;
};

const imgeyes = document.getElementById('eyes');
const buttoneyes = document.getElementById('buttoneyes');

buttoneyes.oninput = () => {
  imgeyes.style.fill = buttoneyes.value;
};

const imgbackground = document.getElementById('background');
const buttonbackground = document.getElementById('buttonbackground');

buttonbackground.oninput = () => {
  imgbackground.style.fill = buttonbackground.value;
};
