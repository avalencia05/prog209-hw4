//Define variables
const
    startBtn = document.querySelector("#FirstB"),
	changeBtn = document.querySelector("#SecondB");
	
//Let variable array 
let wordArray = [];
 

// Function that tells the button what to do 
startBtn.addEventListener("click",myFunction,true);
changeBtn.addEventListener("click",secondChangeWord,true);
changeBtn.style.display = "none";



function myFunction(){
// collecting
	for(let i = 0; i < 3; i++ ){
		wordArray.push(prompt('Please enter a word'));
	}

	{	
 //displaying 
		let out = "<ul>"
		for(let i = 0;  i <3;  i ++){
			out = out + "<li>" + wordArray[i] + "</li>"

		}
		out = out + "</ul>"
		document.getElementById("words").innerHTML = out
		changeBtn.style.display = "block";
    startBtn.style.display = "none";
    startBtn.style.display = "show";
SecondPage.style.display = "none";
	}
	
}


function secondChangeWord( ) {
	
	
	FirstPage.style.display = "none";
SecondPage.style.display = "block";

	MyArray = MyArray.map(ChangeLetters);
	
	let out = "<ul>"
	for(let MyIndex = 0; MyIndex <3; MyIndex++){
		out = out + "<li>" + MyArray[MyIndex] + "</li>"

	}
	out = out + "</ul>"
	document.getElementById("word2").innerHTML = out
	
	

}

function ChangeLetters(word){

	var FirstLetter = word[0]
	var LastLetter = word[word.length - 1]
	var MiddleLetter = word.substring(1,word.length -1)
	return LastLetter + MiddleLetter + FirstLetter;
}