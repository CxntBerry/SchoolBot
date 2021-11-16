# SchoolBot
A bot that does your online class for you on apex online learning.

# Commands
continueBtn() Clicks the continue Button.
getQuestion() returns a string with the Question, the quiz number, and brainly (ex When did Julius Caesar Die? 3.2.1 Brainly)
getChoices(<int choice>) returns a string with the specified choice. If no choice is specified, returns an array with all choices.
stringMatch(<string answers>, <string choices>) returns the most commonly matched string between the answers and choices.
clickQuestion(<int question>) Clicks the specified question (a = 1, b = 2, c = 3, d = 4)
submitAnswer() Submits the clicked answer.
apiReq(<string link>) returns the answers scraped from the link passed through it by running through a local api.
searchAnswer(<string question>) returns a link that most closely matches the question provided.
main() executes main code.
