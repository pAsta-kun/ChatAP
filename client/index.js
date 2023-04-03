//stuff to do with text bubbles ig
let newUserArea;
let newUserBubble;
let newAiArea;
let newAiBubble
let aiResponse; 
let loadInterval;

//actrion listener for if user inputted stuff
document.querySelector('#text').addEventListener('keypress', function (e) {
	//checking when 'enter' key is pressed
	if(e.key == 'Enter')
	{
		userEnter(document.getElementById('text').value);
		gift()
	}

})
//Creates new user text bubble
function userEnter(text)
{
	if((document.getElementById('text').value).charAt(0) != ' ') //Making sure that the stuff being typed in isn't just white space
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

			//Running methods for next steps
			getAIResponse(text);
			aiBubble('')
			gift()

		}
	}
}

function loader(element) {
    element.textContent = 'thinking'

    loadInterval = setInterval(() => {
        // Update the text content of the loading indicator
        element.textContent += '.';

        // If the loading indicator has reached three dots, reset it
        if (element.textContent === 'thinking....') {
            element.textContent = 'thinking';
        }
    }, 300);
}

function aiBubble(response)
{
	if(response === '')
	{
		//Creating new ai text bubble
		newAiArea = document.createElement('div');
		newAiBubble = document.createElement('div');
		newAiArea.classList.add('aiArea');
		newAiBubble.classList.add('aiBubble', 'textBubble');
		newAiArea.appendChild(newAiBubble);
		//setting text of user textbubble
		newAiBubble.innerHTML = response;
		document.getElementsByClassName('textArea')[0].appendChild(newAiArea)
		loader(newAiBubble);
	}
	else 
	{
		newAiBubble.innerHTML = response;
		clearInterval(loadInterval)
		if(response.length() > 200)
			newAiBubble.style.padding = "2% 2% 2% 2%";
		
	}
	
		
}


//http request getting AI response
async function getAIResponse(prompt)
{
	//Ai Response stored here
    const response = await fetch("https://chatap-3obp.onrender.com/", {
        method: "POST",
        body: JSON.stringify({
            message: prompt
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json());

	//Getting the AI response in the right format
    const botResponse = response.bot.trim();
    //console.log(botResponse);
	aiBubble(botResponse)
}

function gift()
{
	// useless -- NO 
	let randomNum = Math.floor((Math.random()*(1000)))

	//Gift from sammy wu
	if( randomNum === 69)
		window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}