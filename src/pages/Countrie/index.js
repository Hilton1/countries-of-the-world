import { Link } from 'react-router-dom';
import { Container, Header } from './styles';

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
    </Container>
  );
}
