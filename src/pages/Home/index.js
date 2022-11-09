import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Header, Countries, Countrie, InputContainer,
} from './styles';

import Select from '../../components/Select';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = useMemo(() => countries.filter((country) => (
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )), [countries, searchTerm]);

  filteredCountries.sort((a, b) => (
    a.translations.por.common < b.translations.por.common ? -1 : 0
  ));

  function handleChangeSerachTerm(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    async function loadCountries() {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all',
        );

        const json = await response.json();
        setCountries(json);
      } catch (error) {
        console.log('error', error);
      }
    }

    loadCountries();
  }, []);

  return (
    <Container>
      <Header>
        <InputContainer>
          <span className="material-icons">
            search
          </span>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={handleChangeSerachTerm}
          />
        </InputContainer>
        <Select>
          <option value="" selected disabled>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </Select>
      </Header>
      <Countries>
        {filteredCountries.map((country) => (
          <Countrie key={country.name.common}>
            <Link to={`/${country.name.common}`}>
              <img src={country.flags.png} alt={country.translations.por.common} />
              <div className="content">
                <h1>{country.translations.por.common}</h1>
                <div className="population">
                  <b>Population: </b>
                  <p>{country.population.toLocaleString('pt-BR')}</p>
                </div>
                <div className="region">
                  <b>Region: </b>
                  <p>{country.region}</p>
                </div>
                <div className="capital">
                  <b>Capital: </b>
                  <p>{country.capital}</p>
                </div>
              </div>
            </Link>
          </Countrie>
        ))}

      </Countries>
    </Container>
  );
}
