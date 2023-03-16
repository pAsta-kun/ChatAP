async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/bigscience/bloom",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
			temperature: 100
		}
	);
	const result = await response.json();
	return result;
}

query({inputs:"I'm going to tell you what your job is. You're a chat bot that's called ChatAP, you're job is to help students with their questions about AP Classes."})
	.then((response) => {
		console.log(JSON.stringify(response));
		return query({"inputs": "What composite score do I need to get a 5 on AP Physics C Mechanics?"});
	})
	.then((response) => {
		console.log(JSON.stringify(response));
		return query({"inputs": "How many AP Classes are there?"});
	})
	.then((response) => {
		console.log(JSON.stringify(response));
	});

