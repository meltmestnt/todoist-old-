import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Menu from "./Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import TodayContent from "./TodayContent";
import TomorrowContent from "./TomorrowContent";
import WeekContent from "./WeekContent";
import { useTheme } from "@material-ui/styles";
const useStyle = makeStyles(theme => {
  return {
    mainContent: {
      flexGrow: 1,
      display: "flex"
    },
    root: {
      paddingTop: "45px",
      display: "flex",

      width: "100%",
      minHeight: "100vh",
      height: "100%",
      background:
        theme.palette.type === "light" ? "rgba(255,255,255,0.3)" : "#282C34",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "50px"
      }
    },
    content: {
      background: theme.palette.type === "light" ? "white" : "#282C34",
      flexGrow: 1,
      paddingTop: "45px",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "25px"
      }
    },
    mainContainer: {
      display: "flex",
      flexGrow: 1,
      marginLeft: "334px",
      width: `calc(100% - 334px)`,
      position: "absolute",
      top: "0",

      minHeight: "100%",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0",
        width: "100%"
      }
    },
    container: {
      display: "flex",
      flexGrow: 1,
      padding: 0,
      position: "relative"
    }
  };
});
function MainContent(props) {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline></CssBaseline>
        <Container maxWidth={"lg"} className={classes.container}>
          <Grid container className={classes.container}>
            <div style={{ width: "333px", position: "relative" }}>
              <Menu
                menuOpen={props.menu}
                handleMenuClose={props.closeMenu}
              ></Menu>
            </div>
            <Grid item xs={12} className={classes.mainContainer}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <div>Main route</div>}
                ></Route>
                <Route
                  path="/today"
                  render={() => <TodayContent classes={classes}></TodayContent>}
                ></Route>
                <Route
                  path="/tomorrow"
                  render={() => (
                    <TomorrowContent classes={classes}></TomorrowContent>
                  )}
                ></Route>
                <Route
                  path="/week"
                  render={() => <WeekContent classes={classes} s></WeekContent>}
                ></Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default MainContent;
