let apis=fetch("https://api.cricapi.com/v1/currentMatches?apikey=609e0eac-7be1-4af5-90de-c5d770179806&offset=0")
	.then(result => result.json())
	.then(result => {
		let resu=(result.data);
        return resu
	})
	.catch(err => {
		console.log("An error occured. Please check your code",err);
	});

    export default apis.resu