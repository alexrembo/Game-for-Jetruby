# Game-for-Jetruby

This game is a collection of random hidden pictures, click each of them, it becomes visible. The essence of the game is to 
find the pair of each image. If the images match, the player is get points, but if the pictures do not match then score reduced.

On page there are a few main functions:

- 'Start new Game' - updates the state of the game. Displayed a new random set of pictures, the score is updated to 0

- 'Save Results' - when the game is over (all the pairs of pictures are open), this button and form will become 
  active and the user can enter his name and save his achievement with the current date. Player results at once dynamically 
  displayed in the results table. If the result is the best player among all players who are in the database, 
  then his account is displayed in the window as 'BestScore'.

- 'Results Table' - It shows a table with the achievements of all users

# Install 

In order to start using the application it is necessary to perform the following actions:

  1. Download and unzip the project on your computer
  
  2. Go to the root folder of the project and used to install all the packages, command "npm install"
  
  3. In the root directory to run the command "npm start"
