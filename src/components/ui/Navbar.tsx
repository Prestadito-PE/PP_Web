import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledAppBar = styled("div")`
  background-color: #fff;
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #f5f5f5;
    width: 250px;
  }
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledListItem = styled("div")`
  margin: 1rem;
`;

const StyledLink = styled(Button)`
  text-transform: none;
  font-weight: normal;
  font-size: 16px;
  color: #000;
  &:hover {
    background-color: #f5f5f5;
  }
`;

type MenuItem = {
  text: string;
  onClick: () => void;
};

type Props = {
  menuItems: MenuItem[];
};

const Navbar: React.FC<Props> = ({ menuItems }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const sideList = () => (
    <div>
      {menuItems.map(({ text, onClick }, index) => (
        <StyledListItem key={text}>
          <StyledLink onClick={onClick}>{text}</StyledLink>
        </StyledListItem>
      ))}
    </div>
  );

  const desktopNavbar = () => (
    <>
      <StyledToolbar>
        <div>
          <img src="https://www.interbank.pe/assets/img/interbank-logo.svg" alt="Interbank" />
        </div>
        <div>
          {menuItems.map(({ text, onClick }, index) => (
            <Button key={text} color="inherit" onClick={onClick}>
              {text}
            </Button>
          ))}
        </div>
      </StyledToolbar>
    </>
  );

  const mobileNavbar = () => (
    <>
      <StyledToolbar>
        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <div>
          <img src="https://www.interbank.pe/assets/img/interbank-logo.svg" alt="Interbank" />
        </div>
        <div>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </StyledToolbar>
      <StyledDrawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {sideList()}
      </StyledDrawer>
    </>
  );

  return (
    <StyledAppBar>
      {isMobile ? mobileNavbar() : desktopNavbar()}
    </StyledAppBar>
  );
};

export default Navbar;
