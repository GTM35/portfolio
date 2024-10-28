import {
  HeaderNav,
  Nav,
  Menu,
  MenuItem,
  MenuLink,
  Logo,
  MenuMobile,
} from "./style";
import menuImage from "../../assets/images/menu-mobile.svg";
import Overlay from "../Overlay";

const Header = () => {
  return (
    <>
      <HeaderNav>
        <Logo src="../../src/assets/images/logo.png" alt="LOGO" />
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
            <MenuItem className="downloadCv">
              <MenuLink href="">Download CV</MenuLink>
            </MenuItem>
          </Menu>
        </Nav>

        <MenuMobile>
          <img src={menuImage} alt="Menu mobile" />
        </MenuMobile>
      </HeaderNav>
      <Overlay />
    </>
  );
};

export default Header;
