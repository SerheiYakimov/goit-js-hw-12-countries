

import debounce from 'lodash.debounce';
import countryCardTps from './templates/countries-tps.hbs';
// import fetchCountries from './js/fetchCountries.js';
import './sass/main.scss';


const refs = {
    input: document.querySelector('#searce')
};

   

// refs.input.addEventListener('input', debounce(onFetchCountry(name)), 500);


// function onFetchCountry(e) {
// na
// }


// function fetchCountries(searchQuery) {
fetch('https://restcountries.eu/rest/v2/name/{name}')
    .then(result => {
        result.json();
    })
    .then(country => {
        console.log(country);
        const markUp = countryCardTps(country);
        refs.input.insertAdjacentHTML('afterend', markUp);
        const name = e.target.value;
    })
    .catch(error => {
        console.log(error);
    })
// searceQuery = refs.input.value;
    // };
