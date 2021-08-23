

import debounce from 'lodash.debounce';
import countryCardTps from './templates/countries-tps.hbs';
// import fetchCountries from './js/fetchCountries.js';
import './sass/main.scss';


const refs = {
    form: document.querySelector('#form'),
    input: document.querySelector('#search'),
    container: document.querySelector('.container')
};

   

refs.input.addEventListener('input', debounce(onFetchCountry), 2000);


function onFetchCountry(e) {
e.preventDefault();
const name = refs.input.value; 
fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(result => {
        return result.json();
    })
    .then(country => {
        console.log(country);
        const markUp = countryCardTps(country);
        console.log(markUp);
        refs.container.insertAdjacentHTML('afterbegin', markUp);
       
    })
    .catch(error => {
        console.log(error);
    })
}


