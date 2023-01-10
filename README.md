# Assignment
In this assignment we will test your knowledge in express and EJS, while also testing your capabalities to debug existing code and apply fixes to it to make tests work.

## Setup
After downloading this repository, run the following 2 commands **from the root of the repository**

### Download the repository and change into the root directory
- `git clone https://github.com/Viewpoint-Programming-Class/basic-route-tests`
- `cd basic-route-tests`

### Install & run the project
- npm install
- npm test

### Initial state
In its initial state all 5 tests will fail as shown in this image

![image](https://user-images.githubusercontent.com/1916443/211428724-e819f747-7d24-48cd-ba5a-ce20659d4584.png)

The tests assert that
1. There's an index.html file in the static directory
2. There's a script.js file in the static directory
3. There's a style.css file in the static directory
4. The logic post request gets handled properly
5. There's an EJS template that renders HTML

## Completing the assignment

Upload an image to the classroom with all the tests passsing, see attached

![image](https://user-images.githubusercontent.com/1916443/211431425-1e192503-0449-4384-963e-5820872fd808.png)

**The tests are not to be modified, only the code, fix the code to make the tests pass not the other way around**

In order to ensure that you understood what is expected from you and used the correct technics to get the tests to pass, please provide a detailed explanation of the steps you used to get each test to work.

### Grading

- 50 percent of your grade is the successful submission of a screenshot and details about your process.
- 10 points for each passing test (meaning that even if you only get one passing test, you'll have a passing grade)

### Tips

Look for mistakes in the code to see if there are any easy solutions to failing tests, some of the tests are simply testing your ability to detect small mistakes in the program. However, for one of the tests, you will have to implement a missing route and all the logic for it.
