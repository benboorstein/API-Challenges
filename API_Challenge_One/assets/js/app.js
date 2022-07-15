function callAPI() {
    const DAD_JOKE_URL = 'https://icanhazdadjoke.com/' // Robert note: "In JS, 'fetch()' only needs the URL. 'curl' -- as in, 'curl -H "Accept: application/json" https://icanhazdadjoke.com/' -- is a Command Prompt tool that requires all that other stuff." // FYI: To clear Command Prompt in Windows: 'cls' + 'enter'

    const promise = fetch(DAD_JOKE_URL, { headers: {'Accept': 'application/json'} }) // this second parameter is so that what I get back is in a JSON format, instead of an HTML format, given that it says here https://icanhazdadjoke.com/api#api-response-format that the "default response format" is in HTML.

    promise
        .then(function(response) {
            const processingPromise = response.json()
            return processingPromise
        })
        .then(function(processedResponse) {
            document.querySelector('.new-joke-location').textContent = processedResponse.joke
        })
}

callAPI() // calling it here just so that a joke appears on load, not just on button click. There might be a more concise way to do this.

document.querySelector('.generate-new-joke').addEventListener('click', function() {
    callAPI()
})