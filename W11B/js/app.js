let button = document.getElementById('get');

// function case(){
//     axios.request({
//         method: "GET",
//         url: "https://api.covid19tracker.ca/summary",
//     }).
//     then(successQuote).catch(failQuote);
// }

// function successQuote(response){
//     console.log(response);
//     console.log(response.data);

// }

// function failQuote(error){
//     console.log(error);
// }

function getInfo(){
    axios({
        method: 'GET',
        url: 'https://quotes.rest/qod.json'
    })
    .then(response => showInfo(response))
    .catch(error => showError(error));

}

button.addEventListener('click', getInfo);

function showInfo(response) {
    document.getElementById('response').innerHTML = `
    <h1>${response.data.contents.quotes[0].quote}</h1>`;
}

function showError(error) {
    document.getElementById('error').innerHTML = `
    <h1>${error}</h1>`;
}




