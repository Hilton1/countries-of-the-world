import { Container, Header, Countries } from './styles';

import Input from '../../components/Input';
import Select from '../../components/Select';

export default function Home() {
  return (
    <Container>
      <Header>
        <Input type="text" placeholder="Search for a country…" />
        <Select name="test" id="test">
          <option value="a" selected disabled>Filter by region</option>
          <option value="africa"><p>Africa</p></option>
          <option value="america"><p>America</p></option>
          <option value="asia"><p>Asia</p></option>
          <option value="europe"><p>Europe</p></option>
          <option value="oceania"><p>Oceania</p></option>
        </Select>
      </Header>
      <Countries />
    </Container>
  );
}
