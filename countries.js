const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country =>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML =  `
        <h3>Name: ${country.name.common}</h3>
        <h3> capital: ${country.capital ? country.capital [0] : 'no capital'} </h3>
        <button onclick="loadCountryDetail ('${country.cca2}')">Detals</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('ga', code);
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    const CountryDetail = document.getElementById('country-detail');
    CountryDetail.innerHTML = `
    
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}



loadCountries();