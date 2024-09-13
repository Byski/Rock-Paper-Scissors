# Rock, Paper, Scissors Game

## Overview
This project implements a classic Rock, Paper, Scissors game using HTML and JavaScript. It allows users to play against the computer, which randomly selects its choice. The game is interactive and provides real-time feedback on the results of each round.

## Features
- **User Input**: Players can choose between rock, paper, or scissors.
- **Computer Choice**: The computer randomly selects its choice from the same options.
- **Score Keeping**: The game tracks and displays the score for both the player and the computer over multiple rounds.
- **Result Display**: After each round, the result is shown, and a final result is displayed after all rounds are completed.

## Code Breakdown

### HTML Structure
The HTML file sets up the structure of the game interface:
- **Document Type**: Specifies the HTML version.
- **Head Section**: Contains metadata, a title, and styles to format the page.
- **Body Elements**:
  - A header that displays the game title.
  - A button to start the game.
  - A div to display the results of each round.

### CSS Styling
The embedded CSS styles ensure a user-friendly interface:
- **Font and Alignment**: The body text is centered, and a consistent font is used for better readability.
- **Button Styling**: Buttons are padded and spaced for an appealing layout.

### JavaScript Logic
The JavaScript file contains the core functionality of the game:

1. **Computer Choice**:
   - The `getComputerChoice()` function randomly selects between rock, paper, and scissors.

2. **User Choice**:
   - The `getHumanChoice()` function prompts the user for their choice and converts it to lowercase for consistency.

3. **Game Logic**:
   - The `playRound()` function compares the choices of the player and the computer, determines the winner, and updates the score accordingly.

4. **Game Flow**:
   - The `playGame()` function runs the game for five rounds, collects results, and displays them on the page. It also announces the overall winner based on the final scores.

5. **Event Handling**:
   - An event listener is attached to the "Play Game" button, triggering the game when clicked.

## How to Play
1. Open the HTML file in a web browser.
2. Click the "Play Game" button to start.
3. Follow the prompt to select rock, paper, or scissors.
4. View the results of each round and the final score displayed on the screen.

## Conclusion
This Rock, Paper, Scissors game is a fun way to practice coding skills in HTML and JavaScript. It provides a straightforward user interface and demonstrates basic programming concepts such as functions, event handling, and conditional logic. Feel free to modify and enhance the game to add more features or improve its design!
