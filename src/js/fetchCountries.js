export function fetchCountries(searchTerm) {
  return fetch(`https://restcountries.com/v2/name/${searchTerm}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(`${error.name}: ${error.message}`));
}
