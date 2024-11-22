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

export type Props = {
  menuOpen: boolean;
};

const Header = () => {
  const [OpenMenuMobile, SetOpenMenuMobile] = useState(false);

  return (
    <>
      <HeaderNav>
        <Logo src="../../src/assets/images/logo.png" alt="LOGO" />

        <Nav className={OpenMenuMobile ? "isOpen" : ""}>
          <Menu>
            <MenuItem>
              <MenuLink href="#About">Sobre</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#Projects">Projetos</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#Contacts">Contatos</MenuLink>
            </MenuItem>
            <MenuItem className="downloadCv">
              <MenuLink
                href="../../src/assets/Curriculo-GustavoMazarello.pdf"
                target="_blank"
                onClick={() => SetOpenMenuMobile(!OpenMenuMobile)}
              >
                Download CV
              </MenuLink>
            </MenuItem>
          </Menu>
        </Nav>

        <MenuMobile
          onClick={() => SetOpenMenuMobile(!OpenMenuMobile)}
          menuOpen={OpenMenuMobile}
        >
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
