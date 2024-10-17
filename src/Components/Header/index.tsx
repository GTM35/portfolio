import { HeaderNav, Nav, Menu, MenuItem, MenuLink, Logo } from "./style";

const Header = () => {
  return (
    <HeaderNav>
      <Logo src="../../src/assets/images/logo2.png" alt="LOGO" />
      <Nav>
        <Menu>
          <MenuItem>
            <MenuLink href="">Sobre</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="">Projetos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="">Contato</MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
      <Menu>
        <MenuItem>
          <MenuLink href="">Download CV</MenuLink>
        </MenuItem>
      </Menu>
    </HeaderNav>
  );
};

export default Header;
