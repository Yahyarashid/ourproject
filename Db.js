
/// 

// This variable to store The  object person info
var studentsDb = [];
// declar virable to store competitors info 
var competitorsDb = {};
// variable to store generateID; 
var nameId = generateID();

// return object represent All  RBK's members;
function makeCohortFiveNames(id, firstName, lastName, age, score, image) {
	return {
		id: id ,
	    firstName: firstName,
	    lastName: lastName,
	    age: age,
	    score: score,
	    image: image
	};
}

// fill  studentsDb with group of names
studentsDb.push(makeCohortFiveNames( nameId(), "Mohammad", "Rawashdah", 24, 0, "cohort5\\mohammad_rawashdeh.jpg"));
studentsDb.push(makeCohortFiveNames(nameId(), "Radwan", "Abdoh", 28, 0, "cohort5\\radwan.jpg"));
studentsDb.push(makeCohortFiveNames(nameId(), "Omar", "bla", 24, 0, "cohort5\\omar.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Mohanad", "bla", 24, 0, "cohort5\\mohannad.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "waled", "assaf", 24, 0, "cohort5\\waleed_assaf.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "AboBakker", "", 24, 0, "cohort5\\abu.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Ahmmad", "", 30, 0, "cohort5\\ahmad.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Akram", "", 24, 0, "cohort5\\akram.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Amjad", "", 24, 0, "cohort5\\amjad.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Ashraf", "", 24, 0, "cohort5\\ashraf.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Ashraf", "", 24, 0, "cohort5\\ashraf1.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Azhar", "", 24, 0, "cohort5\\azhar.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "besslan", "", 24, 0, "cohort5\\besslan.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Ghazi", "", 24, 0, "cohort5\\ghazi.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Hamza", "", 24, 0, "cohort5\\hamza.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Hamza", "", 24, 0, "cohort5\\hamza1.jpg"))
studentsDb.push(makeCohortFiveNames(nameId(), "Issa", "", 24, 0, "cohort5\\issa.jpg"))


// this function return competitor object
function mackCompetitor(info){
	var competitor = {};
	competitor.info = info;
	competitor.score = 0;
	competitor.increaseScore = increaseScore;
	return competitor;
}

// increase score to competitor object.
var increaseScore = function(){
	return this.score += 1;
}

// return object of questions 
function makeQuestions(title, desc){
 	var question = {}

 	question.title = title;
 	question.desc = desc;
 	question.answers = [];
 	question.addAnswer = addAnswer;

 	return question;
}

// adding answer object to question object
var addAnswer = function(answer){
	this.answers.push(answer);
}
 
// make answer object
function makeAnswer(id, valueAnwser, correct){
 	return{
 		id: id,
 		value: valueAnwser,
 		correct: correct,
 	};
}


// declare question
var question1 = makeQuestions("what the result", "var x = 8 * 4 - 6 + 8 % 3(9 / 3)");
question1.addAnswer(makeAnswer("A", "x = 5", false));
question1.addAnswer(makeAnswer("B", "x = 10", false));
question1.addAnswer(makeAnswer("C", "x = 6", true));
question1.addAnswer(makeAnswer("D", "x = 57", false));




