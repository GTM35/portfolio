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
import closeMenuImage from "../../assets/images/close-menu-mobile.svg";
import Overlay from "../Overlay";
import { useState } from "react";

const Header = () => {
  const [OpenMenuMobile, SetOpenMenuMobile] = useState(false);

  return (
    <>
      <HeaderNav>
        <Logo src="../../src/assets/images/logo.png" alt="LOGO" />

        <Nav className={OpenMenuMobile ? "isOpen" : ""}>
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

        <MenuMobile onClick={() => SetOpenMenuMobile(!OpenMenuMobile)}>
          {OpenMenuMobile ? (
            <img src={closeMenuImage} alt="Menu mobile" />
          ) : (
            <img src={menuImage} alt="Menu mobile" />
          )}
        </MenuMobile>
      </HeaderNav>
      {OpenMenuMobile && <Overlay />}
    </>
  );
};

export default Header;
