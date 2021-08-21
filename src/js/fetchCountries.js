export default function fetchCountries(searchQuery) {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(result => console.log(result));
}