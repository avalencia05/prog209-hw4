

//Define variables
const
    FirstBBtn = document.querySelector("#FirstB"),
	SecondBBtn = document.querySelector("#SecondB");
	
//Let variable array 
let MyArray = [];
 

// Function that tells the button what to do 
FirstBBtn.addEventListener("click",myFirstFunction,true);
SecondBBtn.addEventListener("click",secondChangeWord,true);
SecondBBtn.style.display = "none";



function myFirstFunction(){
// collecting
	for(let MyIndex = 0; MyIndex < 3; MyIndex++ ){
		MyArray.push(prompt('Please enter a word'));
	}

	{	
 //displaying 
		let out = "<ul>"
		for(let MyIndex = 0;  MyIndex <3;  MyIndex ++){
			out = out + "<li>" + MyArray[MyIndex] + "</li>"

		}
		out = out + "</ul>"
		document.getElementById("words").innerHTML = out
		SecondBBtn.style.display = "block";
    FirstBBtn.style.display = "none";
    FirstPage.style.display = "show";
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