# Portfolio-2
I chose option 1.
The two existing projects that I used were:
○ To Do list Assignment
○ Login Assignment

My app is a Daily Fitness and Wellness management app, that allows the user to exercise, and tract his/her's daily wellness activities. 

What I added to the projects:
○ In order to view the to do list the USER must login with the correct credentials. Once the user logs in the list will appear and the user will be prompted with a successful log in message. I also added a log out button to this. So when the user logs out the to do list will disappear. 
  - The correct credentials are: username: <any username> and password: Ch@rge!
  - This interactivity is also managed through the useState function
○ I also added react stack navigation in order to navigate between pages/components
○ I also added 3 workout components: Jumping Jacks, Push-Ups, and Squats.
  - These components all use state (useState)
  - The user is able to access the list without being logged in.
  - The user chooses the exercise to do. After the button is clicked the app navigates to the actual exercise component that foes along with the exercise. The user is able to customize their workout by inputting the number of reps and sets they would like to do of each exercise. On press of the submit button the app takes the users input, and generates messages based off of the users progress, and this is dependent on the number of reps and sets they have chosen for each exercise. Each exercise does this. This interactivity was managed thorugh state. The user is able to also see their progress too.
  - I also added a list that shows what exercises the user has clicked/"completed". This interactvity is managed through useState also. 
  - As the user clicks each exercise to workout the application recognizes that as a completed exercise. And, the user also has the ability to reset this list as needed. 
○ I also added another variable in the password state featured in the login component. This was the todo variable. This allowed me to be able to give the logged in user a more personalized experience, that features a todo list. 
○ Components add:
   - Stack Navigation components, one of which uses useState. (The one that does this is the Workout component/screen)
   - JJacks, PushUps, Squats components all also utilize useState.

GitHub pages: https://gaim-student.github.io/Portfolio-2/
