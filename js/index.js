// Get container from the page
const getContainer = () => {
  const container = document.querySelector('.container');
  return container;
};

// Generate a small square
const generateASmallSquare = () => {
  const square = document.createElement('div');

  square.setAttribute('class', 'square');
  return square;
};

// Fill the container with small square
const fillTheContainer = () => {
  // Refresh the color and prevent this function from generating more than 775 big squares
  if (getAllSmallSquares().length === 3150) {
    refreshSmallSquares();
    return;
  }

  const container = getContainer();
  let maxNumberOfSquares = 3150;

  for (let i = 0; i < maxNumberOfSquares; i += 1) {
    container.appendChild(generateASmallSquare());
  }
  changeTheColorOfTheSquareWhenHover('#ff0');
};

// Change the color of the square when hover
const changeTheColorOfTheSquareWhenHover = (color) => {
  const squares = document.getElementsByClassName('square');

  for (let i = 0; i < squares.length; i += 1) {
    squares[i].addEventListener('mouseover', () => {
      squares[i].style.backgroundColor = `${color}`;
    })
  }
};

// Get all small squares 
const getAllSmallSquares = () => {
  const squares = document.getElementsByClassName('square');
  return squares;
};

// Hide all small squares
const hideAllSmallSquares = () => {
  const bigSquares = getAllBigSquares();

  // Show all big squares if their value of display properties are 'none'
  for (let i = 0; i < bigSquares.length; i += 1) {
    if (bigSquares[i].style.display === 'none') {
      bigSquares[i].style.display = 'block';
    }
  }

  for (let i = 0; i < getAllSmallSquares().length; i += 1) {
    getAllSmallSquares()[i].style.display = 'none';
  }
  fillTheContainerWithBiggerSquares();
};

// Generate a bigger square
const generateABigSquare = () => {
  const bigSquare = document.createElement('div');

  bigSquare.setAttribute('class', 'big-square');
  return bigSquare;
};

// Get all big squares
const getAllBigSquares = () => {
  const bigSquare = document.getElementsByClassName('big-square');
  return bigSquare;
};

// Fill the container with big square
const fillTheContainerWithBiggerSquares = () => {
  
  // Refresh the color and prevent this function from generating more than 775 big squares
  if (getAllBigSquares().length === 775) {
    refreshBigSquares();
    return;
  }

  const container = getContainer();
  let maxNumberOfSquares = 775;

  container.style.height = '980px';

  for (let i = 0; i < maxNumberOfSquares; i += 1) {
    container.appendChild(generateABigSquare());
  }
  changeTheColorOfTheBigSquareWhenHover('#f0f');
};

// Change the color of the big square when hover
const changeTheColorOfTheBigSquareWhenHover = (color) => {
  const bigSquares = document.getElementsByClassName('big-square');

  for (let i = 0; i < bigSquares.length; i += 1) {
    bigSquares[i].addEventListener('mouseover', () => {
      bigSquares[i].style.backgroundColor = `${color}`;
    });
  }
};

// refresh the big squares
const refreshBigSquares = () => {
  const bigSquares = getAllBigSquares();

  for (let i = 0; i < bigSquares.length; i += 1) {
    bigSquares[i].style.backgroundColor = '#fff';
  }
};

// refresh the small squares
const refreshSmallSquares = () => {
  const smallSquares = getAllSmallSquares();

  for (let i = 0; i < smallSquares.length; i += 1) {
    smallSquares[i].style.backgroundColor = '#fff';
  }
};

// Hide all big squares
const hideAllBigSquares = () => {
  const smallSquares = getAllSmallSquares();
  
  // Show all small squares if the value of their display properties are 'none'
  for (let i = 0; i < smallSquares.length; i += 1) {
    if (smallSquares[i].style.display === 'none') {
      smallSquares[i].style.display = 'block';
    }
  }

  const bigSquares = getAllBigSquares();

  for (let i = 0; i < bigSquares.length; i += 1) {
    bigSquares[i].style.display = 'none';
  }
  fillTheContainer();
};

// Control the game
const controlTheGame = () => {
  const biggerSquaresButton = document.querySelector('.bigger-squares-btn');
  const smallerSquaresButton = document.querySelector('.smaller-squares-btn');
  const randomButton = document.querySelector('.random');

  biggerSquaresButton.addEventListener('click', hideAllSmallSquares);
  smallerSquaresButton.addEventListener('click', hideAllBigSquares);
  randomButton.addEventListener('click', applyRandomColors);
};

// Generate random color 
const getRandomColors = () => {
  const randomNumber = Math.floor(Math.random() * 225);
  const randomNumber2 = Math.floor(Math.random() * 225);
  const randomNumber3 = Math.floor(Math.random() * 225);
  const randomColor = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`;

  return randomColor;
};

// Apply random colors to square
const applyRandomColors = () => {
  changeTheColorOfTheSquareWhenHover(getRandomColors());
  changeTheColorOfTheBigSquareWhenHover(getRandomColors());
};

controlTheGame();
fillTheContainer();


