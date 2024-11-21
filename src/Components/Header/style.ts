import styled, { keyframes } from "styled-components";
import { bodyMD, breakpoint, colors } from "../../assets/styles/global";

const AnimationMenuMobile = keyframes`
from {

 transform: translateY(-500px);
}

to{
  transform: translateY(0px);
}
`;

const CloseMenu = keyframes`
from {

 opacity:1;
display:flex;
}

to{
  opacity: 0;
  display: none;
}
`;

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  z-index: 1;
  height: fit-content;
  width: 100%;
  justify-content: center;
  position: relative;

  @media (max-width: ${breakpoint.tablet}) {
    background-color: red;
    position: absolute;
    top: 0;
    right: 0;
    animation: ${CloseMenu} 1s;

    display: none;
  }

  &.isOpen {
    display: flex;
    animation: ${AnimationMenuMobile} 1s;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 32px;
  z-index: 1;

  @media (min-width: ${breakpoint.desktop}) {
    /* margin-right: 232px; */
    margin-right: 15.4%;
  }

  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
    flex-direction: column;
    padding: 56px 0 22px 0;
    align-items: center;
    background-color: ${colors.traditional950};
    border-bottom: 2px solid ${colors.traditional500};
  }
`;

export const MenuItem = styled.li`
  list-style: none;

  @media (min-width: ${breakpoint.desktop}) {
    &.downloadCv {
      position: absolute;
      right: 0;
    }
  }
`;

export const MenuLink = styled(bodyMD).attrs({ as: "a" })`
  font-weight: bold;
  color: ${colors.elegance50};
  text-decoration: none;

  &:hover {
    color: ${colors.modern500};
    border-bottom: 2px solid ${colors.modern500};
    transition: color 0.5s ease-out;
  }
`;

export const Logo = styled.img`
  max-height: 60px;

  @media (max-width: ${breakpoint.tablet}) {
    max-width: 180px;
    width: 100%;
  }
`;

export const MenuMobile = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 24px;
  display: none;
  z-index: 1;

  @media (max-width: ${breakpoint.tablet}) {
    display: block;
  }
`;
