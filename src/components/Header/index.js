import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ onToggleTheme }) {
  return (
    <Container>

      <Link to="/">Where in the world?</Link>
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
