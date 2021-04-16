import React, { useState, useEffect } from 'react'
import axios from 'axios'

const showCountries = ({ countries, filter }) => {
    const filtertrim = filter.trim().toLowerCase()
    const countriesFiltered = countries.filter(country => {
        if (!filtertrim) {
            return true
        }
        if (country.name.toLowerCase().includes(filtertrim)) {
            return true
        }
    })
    console.log('Countryfilter lenght: ', countriesFiltered.length)
    if (countriesFiltered.length > 10) return <p>Too many results.</p>
    else if (countriesFiltered.length < 1) return <p>No results.</p>
    else if (countriesFiltered.length > 1) return countriesFiltered.map(country => <p key={countries.indexOf(country)}>{country.name}</p>)
    else return (
        countriesFiltered.map(country =>
            <div key={countries.indexOf(country)}>
                <h2>{country.name} ({country.nativeName})</h2>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Languages:</p>
                <ul>
                    {country.languages.map(language => <li>{language.name} ({language.nativeName})</li>)}
                </ul>
                <img src={country.flag} height="100" alt="Flag" />
            </div>
        ))
}


const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            setCountries(response.data)
        })
    }, [])

    return (
        <div>
            <h1>Countries</h1>
            Filter by name: <input value={filter} onChange={event => setFilter(event.target.value)} />
            {showCountries({ countries, filter })}
        </div>

    )
}

export default App