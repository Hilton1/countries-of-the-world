import { Container, Header, Countries } from './styles';
import Input from '../../components/Input';

export default function Home() {
  return (
    <Container>
      <Header>
        <Input type="text" placeholder="Search for a country…" />
        <select name="test" id="test">
          <option value="a">Filter by region</option>
        </select>
      </Header>
      <Countries />
    </Container>
  );
}
