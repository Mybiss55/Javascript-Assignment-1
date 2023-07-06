// Assignment 1 | COMP1073 Client-Side JavaScript

//Set up the arrays
var sentence = [
["John", "Doe", "Jane", "Smith"],
["ran over", "walked on", "slept on", "jumped over"],
["the blue", "the red", "the green", "the yellow"],
["ball", "bat", "car", "truck"],
["at the park", "at the store", "at the school", "at the house"],
];
//used to store the in use sentence
let newSentence = ["John", "ran over", "the blue", "ball", "at the park"];

function getRandNum(num){
var rand1 = Math.floor(Math.random() * num);
return rand1;
}
//make a new string with random words
let randStringBtn = document.querySelector('#rand-btn')
randStringBtn.onclick = function(){
	randString();
}
function randString(){
	textToSpeak = "";
	for(let i = 0; i < sentence.length; i++){
		let rand = getRandNum(sentence.length - 1);
		console.log(rand);
		newSentence[i] = sentence[i][rand];
		// textToSpeak = textToSpeak + " " + sentence[i][rand];
	}
	paragraph.textContent = newSentence.join(" ");
	textToSpeak = newSentence.join(" ");
	console.log(newSentence);
}
//reset the sentence to the originals
let resetBtn = document.querySelector('#reset-btn')
resetBtn.onclick = function(){
	reset();
}
function reset(){
	textToSpeak = "John ran over the blue ball at the park";
	paragraph.textContent = textToSpeak;
}
//Call each word button to change a specific word
let personBtn = document.querySelector('#person-btn');
personBtn.onclick = function(){
	changeWord(0);
}
let verbBtn = document.querySelector('#verb-btn');
verbBtn.onclick = function(){
	changeWord(1);
}
let adjBtn = document.querySelector('#adjective-btn');
adjBtn.onclick = function(){
	changeWord(2);
}
let thingBtn = document.querySelector('#thing-btn');
thingBtn.onclick = function(){
	changeWord(3);
}
let placeBtn = document.querySelector('#place-btn');
placeBtn.onclick = function(){
	changeWord(4);
}
function changeWord(wordType){
	//change the selected wordType and iterate the array to the next element
	//if element in newSentence is the last element in sentence, set it to the first element of sentence
	if(newSentence[wordType] == sentence[wordType][sentence[wordType].length - 1]){
		newSentence[wordType] = sentence[wordType][0];
	}
	//else, set it to the next element in sentence
	else{
		//taking the index of the current element and finding the next one
		newSentence[wordType] = sentence[wordType][sentence[wordType].indexOf(newSentence[wordType]) + 1];
	}
	paragraph.textContent = newSentence.join(" ");
}
//Default Text to Speech
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = "John ran over the blue ball at the park";
//get paragraph element
var paragraph = document.querySelector('#tts-p');
paragraph.textContent = textToSpeak;

var speakButton = document.querySelector('#tts-btn');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	console.log(utterThis);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
