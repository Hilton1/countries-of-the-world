import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form, Header, Countries, Countrie,
} from './styles';

import Input from '../../components/Input';
import Select from '../../components/Select';

export default function Home() {
  const [countries, setCountries] = useState([]);

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
  }, [countries]);

  return (
    <Form>
      <Header>
        <Input type="text" placeholder="Search for a country…" />
        <Select>
          <option value="a" selected disabled>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </Select>
      </Header>
      <Countries>
        {countries.map((country) => (
          <Countrie key={country.name.common}>
            <Link to={`/${country.name.common}`}>
              <img src={country.flags.png} alt={country.name.common} />
              <div className="content">
                <h1>{country.name.common}</h1>
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
    </Form>
  );
}
