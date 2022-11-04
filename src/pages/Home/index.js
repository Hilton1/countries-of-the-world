import { Link } from 'react-router-dom';
import {
  Form, Header, Countries, Countrie,
} from './styles';

import Input from '../../components/Input';
import Select from '../../components/Select';

export default function Home() {
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
        <Countrie>
          <Link to="/brasil">
            <img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg" alt="Brasil" />
            <div className="content">
              <h1>Brasil</h1>
              <div className="population">
                <b>Population: </b>
                <p>206,135,893</p>
              </div>
              <div className="region">
                <b>Region: </b>
                <p>Americas</p>
              </div>
              <div className="capital">
                <b>Capital: </b>
                <p>Brasília</p>
              </div>
            </div>
          </Link>
        </Countrie>
      </Countries>
    </Form>
  );
}
