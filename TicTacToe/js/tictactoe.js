// ==============================
// Tic Tac Toe - tictactoe.js
// Parts 1–8 combined
// ==============================

// Track whose turn it is
let activePlayer = 'X';

// Record moves as strings like "0X", "4O" for win checks
let selectedSquares = [];

/* ------------------------------
   Place an X or O into a square
--------------------------------*/
function placeXOrO(squareNumber) {
  // Prevent selecting an already-used square
  if (!selectedSquares.some(el => el.includes(squareNumber))) {
    const select = document.getElementById(squareNumber);

    // Put the correct image into the cell background
    if (activePlayer === 'X') {
      select.style.backgroundImage = 'url("images/x.png")';
    } else {
      select.style.backgroundImage = 'url("images/o.png")';
    }

    // Save move and check for a win
    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions();

    // Toggle the current player
    activePlayer = (activePlayer === 'X') ? 'O' : 'X';

    // Placement sound
    audio('./media/place.mp3');

    // Let the computer play after 1 second (and block clicks briefly)
    if (activePlayer === 'O') {
      disableClick();
      setTimeout(function () { computersTurn(); }, 1000);
    }

    return true; // tells computersTurn() the move succeeded
  }
  return false;
}

/* ------------------------------
   Computer picks a random cell
--------------------------------*/
function computersTurn() {
  let success = false;
  let pickASquare;

  while (!success) {
    pickASquare = String(Math.floor(Math.random() * 9)); // "0".."8"
    if (placeXOrO(pickASquare)) {
      // (kept to match the course’s pattern)
      placeXOrO(pickASquare);
      success = true;
    }
  }
}

/* ------------------------------
   Temporarily disable/enable clicks
--------------------------------*/
function disableClick() {
  // Make page unclickable
  document.body.style.pointerEvents = 'none';
  // Re-enable after 1 second
  setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 1000);
}
function enableClick() {
  document.body.style.pointerEvents = 'auto';
}

/* ------------------------------
   Play an audio file
--------------------------------*/
function audio(audioURL) {
  const snd = new Audio(audioURL);
  snd.play();
}

/* ------------------------------
   Win/tie detection
--------------------------------*/
function checkWinConditions() {
  function arrayIncludes(a, b, c) {
    const A = selectedSquares.includes(a);
    const B = selectedSquares.includes(b);
    const C = selectedSquares.includes(c);
    if (A && B && C) return true;
  }

  // X wins
  if (arrayIncludes('0X','1X','2X')) { drawWinLine( 50,100, 558,100) }
  else if (arrayIncludes('3X','4X','5X')) { drawWinLine( 50,304, 558,304) }
  else if (arrayIncludes('6X','7X','8X')) { drawWinLine( 50,508, 558,508) }
  else if (arrayIncludes('0X','3X','6X')) { drawWinLine(100, 50, 100,558) }
  else if (arrayIncludes('1X','4X','7X')) { drawWinLine(304, 50, 304,558) }
  else if (arrayIncludes('2X','5X','8X')) { drawWinLine(508, 50, 508,558) }
  else if (arrayIncludes('6X','4X','2X')) { drawWinLine(100,508, 510, 90) }
  else if (arrayIncludes('0X','4X','8X')) { drawWinLine(100,100, 520,520) }

  // O wins
  else if (arrayIncludes('0O','1O','2O')) { drawWinLine( 50,100, 558,100) }
  else if (arrayIncludes('3O','4O','5O')) { drawWinLine( 50,304, 558,304) }
  else if (arrayIncludes('6O','7O','8O')) { drawWinLine( 50,508, 558,508) }
  else if (arrayIncludes('0O','3O','6O')) { drawWinLine(100, 50, 100,558) }
  else if (arrayIncludes('1O','4O','7O')) { drawWinLine(304, 50, 304,558) }
  else if (arrayIncludes('2O','5O','8O')) { drawWinLine(508, 50, 508,558) }
  else if (arrayIncludes('6O','4O','2O')) { drawWinLine(100,508, 510, 90) }
  else if (arrayIncludes('0O','4O','8O')) { drawWinLine(100,100, 520,520) }

  // Tie
  else if (selectedSquares.length >= 9) {
    audio('./media/tie.mp3');
    setTimeout(function () { resetGame(); }, 500);
  }
}

/* ------------------------------
   Animated win line (Part 7)
--------------------------------*/
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  const canvas = document.getElementById('win-lines');
  const c = canvas.getContext('2d');

  // Start & end points
  let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2;
  // Temp points for animation
  let x = x1, y = y1;

  // Draw the line with a small animation
  function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();

    // Move temp points toward the end point
    if (x1 <= x2 && y1 <= y2) {
      if (x < x2) x += 10;
      if (y < y2) y += 10;
      if (x >= x2 && y >= y2) cancelAnimationFrame(animationLoop);
    }
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) x += 10;
      if (y > y2) y -= 10;
      if (x >= x2 && y <= y2) cancelAnimationFrame(animationLoop);
    }
  }

  // Clear the canvas after the animation
  function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
  }

  // No clicking while win line + sound
  disableClick();
  audio('./media/winGame.mp3');

  // Start animation; after 1s clear canvas and reset the game
  animateLineDrawing();
  setTimeout(function () { clear(); resetGame(); }, 1000);
}

/* ------------------------------
   Reset the game (Part 8)
--------------------------------*/
function resetGame() {
  // Iterate through each HTML square element and remove any image
  for (let i = 0; i < 9; i++) {
    let square = document.getElementById(String(i));
    square.style.backgroundImage = '';
  }
  // Reset tracking so we can start fresh
  selectedSquares = [];
  activePlayer = 'X';
  // Ensure clicks are enabled (in case we reset from a win)
  enableClick();
}