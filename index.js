async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/bigscience/bloom",
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
	console.log(response["generated_text"][0]);

});

document.querySelector('#text').addEventListener('keypress', function (e) {
	if(e.key == 'Enter')
	{
		
		userEnter(document.getElementById('text').value);


		gift()

	}
})

function userEnter(text)
{
	document.createElement('div').classList.add('userArea');

	//console.log('enter')
	console.log(text);
	query(document.getElementById('text').value);
}

function gift()
{
			// useless -- NO 
		let randomNum  = Math.floor((Math.random()*(100)))
		console.log(randomNum)

		//Gift from sammy wu
		if( randomNum === 69)
			window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}