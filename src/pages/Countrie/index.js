import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Header, Content } from './styles';

export default function Countrie() {
  const { countryName } = useParams();
  const [countryObject, setCountryObject] = useState([]);

  useEffect(() => {
    async function loadCountry() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`,
        );

        const json = await response.json();
        setCountryObject(json);
      } catch (error) {
        console.log('error', error);
      }
    }
    loadCountry();
  }, [countryName]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <span className="material-icons">
            keyboard_backspace
          </span>
          Back
        </Link>
      </Header>

      {countryObject?.map((country) => (
        <Content key={country.name.common}>
          <div className="image_container">
            <img src={country.flags.svg} alt={country.translations.por.common} />
          </div>
          <div className="info_country">
            <h1>{country.translations.por.common}</h1>

            <div className="description">
              <div className="left_description">
                <div className="info">
                  <b>Nome Nativo:</b>
                  <p>{country.name.common}</p>
                </div>
                <div className="info">
                  <b>População:</b>
                  <p>{country.population.toLocaleString('pt-BR')}</p>
                </div>
                <div className="info">
                  <b>Continente:</b>
                  <p>{country.region}</p>
                </div>
                <div className="info">
                  <b>Sub-continente:</b>
                  <p>{country.subregion}</p>
                </div>
                <div className="info">
                  <b>Capital</b>
                  <p>{country.capital?.map((name) => (country.capital.length <= 1 ? name : `${name}, `))}</p>
                </div>
              </div>
              <div className="right_description">
                <div className="info">
                  <b>Domínio:</b>
                  <p>
                    {country.tld?.map((topLevelDomain) => (
                      country.tld.length <= 1 ? topLevelDomain : `${topLevelDomain}, `
                    ))}
                  </p>
                </div>
                <div className="info">
                  <b>Moeda:</b>
                  <p>
                    {country.currencies[Object.values(
                      Object.keys(country.currencies),
                    )[0]].name}

                  </p>
                </div>
                <div className="info">
                  <b>Languages:</b>
                  <p>{Object.values(country.languages)}</p>
                </div>
              </div>
            </div>

            <div className="border_coutries_container">
              <p>Border Countries:</p>
              <div className="border_countries">
                <Link to="/argentina">Argentina</Link>
                <Link to="/argentina">Argentina</Link>
                <Link to="/argentina">Argentina</Link>
                <Link to="/argentina">Argentina</Link>
                <Link to="/argentina">Argentina</Link>
                <Link to="/argentina">Argentina</Link>
              </div>
            </div>
          </div>
        </Content>
      ))}

    </Container>
  );
}
