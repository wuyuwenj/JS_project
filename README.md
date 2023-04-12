Background

<a rel="noreferrer" target="_blank" href="https://wuyuwenj.github.io/JS_project/">Pixel Quack Quest: The Dungeon Rescue</a> is a game in which players must locate and rescue a group of missing ducks. Players must interact with characters and collect clues to uncover the ducks' whereabouts.

Rules:

1)	You will have 1 live on each level, try to avoid enemies and get over the hurdles

2)	You can move left, right and jump


Functionality

Players will be able to: 

•	Moving left and right with a and d

•	jump with w

•	Start and reset the level

•	Enter the next level after rescure the duck


<img width="395" alt="startscreen" src="https://user-images.githubusercontent.com/83894727/217940436-ce855f0e-9418-4450-9402-bf117dab29a3.png">


Wireframes


•	A start screen will appear for some game description and a start button at first.

•	After the player start the game, the screen will show wad control. 

•	Then, player can press any keys after to start playing.

•	Simple instructions will include move:wad to make sure player know how to play

•	Controls will includes Start, stop, Reset and back to main menu.

•	Nav links include links to this project's Github repo, my LinkedIn.


Technologies, Libraries, APIs

This project will be implemented with the following technologies:

•	The Canvas API to render the game board, handle player movement

•	Webpack and Babel to bundle and transpile the source JavaScript code

•	npm to manage project dependencies




Implementation Timeline

NB:

•	Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API. Create Tilemap, Player, Ducks and Platform classes. Try to render the grid, make sure the player can move properly with wad key. 

•	Monday: Start creating different objects such as enemies and floor to support the player If possible, try to start working on collision between floor, player and duck.

•	Tuesday: Finish all collisions and work on creating and designing different levels 

•	Wednesday: Focus on  stying characters and level. Adding clear instructions on how to play and adding nav link.

•	Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.



Bonus features

•	Adding multiple ducks in a map

•	reduce player jump height after every rescure in a level, so that player have to figure out which to rescure first

•	Adding different types of enemies such as enemies that can jump or shoot.

•	Set the display to move with the character, so that the level would be more interesting.

