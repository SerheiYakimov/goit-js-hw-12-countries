

import debounce from 'lodash.debounce';
import countryCardTps from './templates/countries-tps.hbs';
import countriesListTps from './templates/countries-list-tps.hbs';
 import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';

import '@pnotify/core/dist/BrightTheme.css';
// import fetchCountries from './js/fetchCountries.js';
import './sass/main.scss';

 alert({
    text: 'Too many matches found! Please enter a more specific query!'
  });


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
        if (country.lenght >= 10) {
            alert({
    text: 'Too many matches found! Please enter a more specific query!'
  });
        }
        if (country.lenght < 10 && country.lenght >= 2) {
            const markUpCountries = countriesListTps(country);
            
            refs.container.insertAdjacentHTML('afterbegin', markUpCountries);
        }
        else {
            const markUpCountry = countryCardTps(country);
            
            refs.container.insertAdjacentHTML('afterbegin', markUpCountry);
        }
        // console.log(country);
        
       
    })
    .catch(error => {
        console.log(error);
    })
}


