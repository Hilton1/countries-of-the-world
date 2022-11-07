import { Link } from 'react-router-dom';
import { Container, Header, Content } from './styles';

export default function Countrie() {
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

      <Content>
        <div className="image_container">
          <img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg" alt="Brasil" />
        </div>
        <div className="info_country">
          <h1>Brasil</h1>

          <div className="description">
            <div className="left_description">
              <div className="info">
                <b>Native Name:</b>
                <p>Brasil</p>
              </div>
              <div className="info">
                <b>Population:</b>
                <p>206,135,893</p>
              </div>
              <div className="info">
                <b>Region:</b>
                <p>America</p>
              </div>
              <div className="info">
                <b>Sub Region:</b>
                <p>America</p>
              </div>
              <div className="info">
                <b>Capital</b>
                <p>Brasília</p>
              </div>
            </div>
            <div className="right_description">
              <div className="info">
                <b>Top Level Domain:</b>
                <p>.br</p>
              </div>
              <div className="info">
                <b>Currencies:</b>
                <p>Real</p>
              </div>
              <div className="info">
                <b>Languages:</b>
                <p>Português</p>
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
    </Container>
  );
}
