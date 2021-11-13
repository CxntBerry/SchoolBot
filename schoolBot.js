//browserjs

//maybe try to send a request to a vps server and use php to look at the data
//submitted by this and the data on brainly.com and compares them with an algorithim.


function continueBtn()
{
	continuebtn = document.getElementsByClassName('nav-button mat-focus-indicator mat-raised-button mat-button-base mat-primary ng-star-inserted');
	continuebtn[1].click();
}

function getQuestion()
{
  var question = document.getElementsByClassName('ng-star-inserted')[79].textContent;
	var quiz = document.getElementsByClassName('toolbar-title-ula ng-star-inserted')[0].textContent;
	var googleString = question + " " + quiz + " " + "brainly";

	return googleString
}

function getChoices(qnum)
{
		//81,83,85,87
		var q1 = document.getElementsByClassName('ng-star-inserted')[81].textContent;
		var q2 = document.getElementsByClassName('ng-star-inserted')[83].textContent; //shouldve used c1,c2, etc. These are choices not questions
		var q3 = document.getElementsByClassName('ng-star-inserted')[85].textContent;
		var q4 = document.getElementsByClassName('ng-star-inserted')[87].textContent;
		var questionArray = {question1:q1,question2:q2,question3:q3,question4:q4};

		if (qnum == null)
		{
			return questionArray;
		} else if (qnum == 1) {
		    return q1;
		}else if (qnum == 2) {
		    return q2;
		}else if (qnum == 3) {
        return q3;
		}else if (qnum == 4) {
				return q4;
		}
}

//console.log(getChoices())



function clickQuestion(question)
{
		var btn1 = document.getElementsByClassName('mat-accent sia-multiple-choice-radio mat-radio-button')[0];
		var btn2 = document.getElementsByClassName('mat-accent sia-multiple-choice-radio mat-radio-button')[1];
		var btn3 = document.getElementsByClassName('mat-accent sia-multiple-choice-radio mat-radio-button')[2];
		var btn4 = document.getElementsByClassName('mat-accent sia-multiple-choice-radio mat-radio-button')[3];

		if (question == 1) {btn1.click()} if (question == 2) {btn2.click()} if (question == 3) {btn3.click()} if (question == 4) {btn4.click()}
}

//clickQuestion(2)




function submitAnswer()
{
  var btn = document.getElementsByClassName('mat-focus-indicator mat-raised-button mat-button-base mat-primary')[0];
  btn.click();
}



function searchAnswer(question)
{
	var requestURL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDeTs94j-j-R-OrVHxOVQ4jy3DarCnTuKM&cx=2f331d895ab74a56b&q=' + question;
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
	  const firstPage = request.response['items'][0]['link'];
		console.log(firstPage)
	  //send website address to custom api
		//return a call to a function on a custom api that searches for answers in website.
	}
}


function main()
{
  var currentQuestion = 0;
  for (var x = 0; x<10; x++)
  {
    for (var i = 0; i<5; i++)
		{
      if (searchAnswer(getQuestion) == getChoices(i))
      {
        clickQuestion(i);
        submitAnswer();
			}
      else {
        console.log("ERROR, CHOICES DID NOT MATCH ANSWER");
        return
      }
	  }
  }

								// DEPRECATED

		/*if (searchAnswer(getQuestion) == getChoices(1) || searchAnswer(getQuestion) == getChoices(2) || searchAnswer(getQuestion) == getChoices(3) || searchAnswer(getQuestion) == getChoices(4))

		{ //see if top rated answer closely matches one of the question choices

			clickQuestion() //FIX THIS IN SCHOOL

		}*/ // Deprecated fixed in school

}



main()
