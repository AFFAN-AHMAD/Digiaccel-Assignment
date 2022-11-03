# Digiaccel-Assignment

## Approach to generate the quiz

I have created two seperate collections, one is for the questions having only one answer correct and one for the questions having more than one answers correct.

I will select the type of questions, admin wants to generate from the UI. 

Create a stack of empty array


I will run the mongo query to find questions for each difficulty level(1-10), with initial difficulty level 1 and will increase the difficulty by one in every iteration
 from here I will get an array of questions having that difficulty level, and will randomly pick the questions out of them, doing this so that for every quiz,
 questions should not come same. Now, push these questions into the stack in every iteration.
 
Now will generate a link of those questions having questions from the stack
