

import { debounce } from 'lodash/debounce';
// const debounce = require('lodash.debounce');
import contriesTemplate from './templates/countries-tps.hbs';
import fetchCountries from './js/fetchCountries.js';
import './sass/main.scss';




document.querySelector('input').addEventListener(
    'input',
    _.debounce(fetchCountries(searchQuery)), 500);