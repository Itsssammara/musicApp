import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <h1>Mara's Music</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282828;
  color: white;

  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
