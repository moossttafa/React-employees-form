import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, IconButton, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    transform: "translateZ(0)",
  },
  title: {
    flexGrow: 1,
    color: "#333",
  },
  icon: {
    color: "#333",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Store
          </Typography>
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon fontSize="small" className={classes.icon} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <ChatBubbleIcon fontSize="small" className={classes.icon} />
            </Badge>
          </IconButton>
          <IconButton>
            <AccountCircleIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
