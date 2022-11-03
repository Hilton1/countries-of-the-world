import { Container } from './styles';

export default function Input() {
  return (
    <Container>
      <span className="material-icons">
        search
      </span>
      <input type="text" placeholder="Search for a country..." />
    </Container>
  );
}
