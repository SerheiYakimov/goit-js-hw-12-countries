
import debounce from 'lodash.debounce';
import countriesListTps from './templates/countries-list-tps.hbs';
import countryCardTps from './templates/countries-tps.hbs';
import { alert } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './js/fetchCountries.js';
import './sass/main.scss';


const refs = {
    form: document.querySelector('#form'),
    input: document.querySelector('#search'),
    container: document.querySelector('.container')
};

 
refs.input.addEventListener('input', debounce(onFetchCountry), 500);


function onFetchCountry(e) {
    e.preventDefault();
    const searchQuery = refs.input.value;

    fetchCountries(searchQuery)
    .then(renderCountries)
    .catch(error => {
        console.log(error);
    });
};


function renderCountries (country) {
    
    refs.container.innerHTML = '';
    if (country.length > 10) {
        alert({
                text: 'Too many matches found! Please enter a more specific query!'
        })
    };
    if (country.length < 10 && country.length > 2) {
        const markUpCountries = countriesListTps(country);            
        refs.container.insertAdjacentHTML('afterbegin', markUpCountries);   
    };
    if (country.length === 1) {
        const markUpCountry = countryCardTps(country);    
        refs.container.insertAdjacentHTML('afterbegin', markUpCountry);
    };       
};