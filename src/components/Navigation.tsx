import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";

const useStyles = makeStyles({
  root: {},
});

const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link className="btn btn-primary" to="/">
        <BottomNavigationAction
          label="Post list"
          icon={
            <>
              <ListAltIcon style={{ color: "#2a2e42" }} fontSize="large"/>
              <span style={{ color: "#2a2e42" }}>List posts</span>
            </>
          }
        />
      </Link>
      <Link className="btn btn-secondary" to="/new-post">
        <BottomNavigationAction
          label="Add post"
          icon={
            <>
              <PostAddIcon style={{ color: "#2a2e42" }} fontSize="large"/>
              <span style={{ color: "#2a2e42" }}>Add new post</span>
            </>
          }
        />
      </Link>
    </BottomNavigation>
  );
};

export default Navigation;
