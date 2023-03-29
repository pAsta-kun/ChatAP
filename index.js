async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/bigscience/bloomz",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "Can you please let us know more details about your "}).then((response) => {
	console.log(JSON.stringify(response));
});

//stuff to do with text bubbles ig
let newUserArea;
let newUserBubble;
let newAiArea;
let newAiBubble
let aiResponse; 

//actrion listener for if user inputted stuff
document.querySelector('#text').addEventListener('keypress', function (e) {
	if(e.key == 'Enter')
	{
		userEnter(document.getElementById('text').value);
		gift()
	}

})
//Creates new user text bubble
function userEnter(text)
{
	if((document.getElementById('text').value).charAt(0) != ' ')
	{
		if(document.getElementById('text').value != '')
		{
			//Creating new user text bubble
			newUserArea = document.createElement('div');
			newUserBubble = document.createElement('div');
			newUserArea.classList.add('userArea');
			newUserBubble.classList.add('userBubble', 'textBubble');
			newUserArea.appendChild(newUserBubble);
			//setting text of user textbubble
			newUserBubble.innerHTML = text;
			document.getElementsByClassName('textArea')[0].appendChild(newUserArea)
			//Reseting textbox
			document.getElementById('text').value = null;

			//Creating new user text bubble
			newAiArea = document.createElement('div');
			newAiBubble = document.createElement('div');
			newAiArea.classList.add('aiArea');
			newAiBubble.classList.add('aiBubble', 'textBubble');
			newAiArea.appendChild(newAiBubble);
			//setting text of user textbubble
			newUserBubble.innerHTML = text;
			document.getElementsByClassName('textArea')[0].appendChild(newAiArea)

			//query(text);
		}
		
	}

	
}
function gift()
{
	// useless -- NO 
	let randomNum = Math.floor((Math.random()*(1000)))

	//Gift from sammy wu
	if( randomNum === 69)
		window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

