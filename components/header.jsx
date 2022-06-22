import React from "react";
import { Link } from "../routes";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ cursor: "pointer" }}
          >
            <Link route="/">
              <Button color="inherit" size="large">
                <HomeIcon fontSize="large" sx={{ marginRight: 1 }} />
                Crowdfunding
              </Button>
            </Link>
          </Typography>
          <Link route="/campaigns/new">
            <Button color="inherit" size="large">
              <AddIcon fontSize="large" />
              Create a campagin
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
