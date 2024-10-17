import styled from "styled-components";
import { bodyMD, colors } from "../../assets/styles/global";

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 32px;
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const MenuLink = styled(bodyMD).attrs({ as: "a" })`
  font-weight: bold;
  color: ${colors.elegance50};
  text-decoration: none;

  &:hover {
    color: ${colors.modern500};
    border-bottom: 2px solid ${colors.modern500};
    transition: color 0.5s ease;
  }
`;

export const Logo = styled.img`
  max-height: 60px;
`;
