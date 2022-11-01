import { Container } from './styles';

export default function Header() {
  function handleToggleTheme() {
    console.log('Trocou de tema');
  }

  return (
    <Container>
      <h1>Where in the world?</h1>
      <button className="darkMode" onClick={handleToggleTheme} type="button">
        <span className="material-icons">dark_mode</span>
        <p>Dark Mode</p>
      </button>
    </Container>
  );
}
