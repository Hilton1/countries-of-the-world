import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Header({ onToggleTheme }) {
  return (
    <Container>
      <h1>Where in the world?</h1>
      <button className="darkMode" onClick={onToggleTheme} type="button">
        <span className="material-icons">dark_mode</span>
        <p>Dark Mode</p>
      </button>
    </Container>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
};
