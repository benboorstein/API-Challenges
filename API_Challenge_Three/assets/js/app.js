const regionP = document.querySelector('.region-name-p')
const subregionP = document.querySelector('.subregion-name-p') 
const capitalP = document.querySelector('.capital-name-p')

function callAPI(paragraph, objProp) {
    const COUNTRY_URL = 'https://restcountries.com/v2/name/estonia' // Robert note: "In JS, 'fetch()' only needs the URL. 'curl' -- as in, 'curl -H "Accept: application/json" https://restcountries.com/v2/name/estonia' -- is a Command Prompt tool that requires all that other stuff." // FYI: To clear Command Prompt in Windows: 'cls' + 'enter'
    const promise = fetch(COUNTRY_URL, { headers: {'Accept': 'application/json'} }) // this second parameter is so that what I get back is in a JSON format, instead of an HTML, or any other, format
    promise
        .then(function(response) {
        const processingPromise = response.json()
        return processingPromise
        })
        .then(function(processedResponse) {
        paragraph.textContent = processedResponse[0][objProp]
        })
}

// the four event handlers
document.querySelector('.get-region-name').addEventListener('click', function() {
    callAPI(regionP, 'region')
})

document.querySelector('.get-subregion-name').addEventListener('click', function() {
    callAPI(subregionP, 'subregion')
})

document.querySelector('.get-capital-name').addEventListener('click', function() {
    callAPI(capitalP, 'capital')
})

document.querySelector('.get-flag').addEventListener('click', function() {
    const COUNTRY_URL = 'https://restcountries.com/v2/name/estonia'
    const promise = fetch(COUNTRY_URL, { headers: {'Accept': 'application/json'} })
    const flagP = document.querySelector('.flag-p')
    promise
        .then(function(response) {
            const processingPromise = response.json()
            return processingPromise
        })
        .then(function(processedResponse) {
            const img = document.createElement('img')
            img.src = processedResponse[0].flag
            img.alt = 'flag of Estonia'
            img.width = '45'
            img.style.display = 'block'
            img.style.objectPosition = '0 5px' // to vertically center flag img
            flagP.appendChild(img)
        })
        document.querySelector('.flag-p').textContent = '' // This line is here to make sure that if the '.get-flag' button is clicked a second time a second flag doesn't appear (I didn't want to use '.disabled' because then it graphically subdues the button, which I don't want). Also note that this line works the same way when at the beginning of the function instead.
})