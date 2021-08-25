export default function fetchCountries(searchQuery) {
    const name = searchQuery;    
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(result => result.json())
        
}

        
