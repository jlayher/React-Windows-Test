//import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
//import CustomBtn from "./components/CustomBtn";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import { Typography } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed", 
    },
  },
  typography: {
    fontFamily: ["Robotot"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  }
});

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="{classes.wrapper}">
          <Typography variant="h4" className={classes.bigSpace} color="primary" >
            At Rocket.io we are passionate about software
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lore is supadauapl. Shamblsa doodly doo, ding dong doodly doodly doodly doodly doodly doodly doodly do, con schmechalzie unkata torbureu
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid icon={<SecurityIcon style={{ fill: "#4360A6", height: "125", width: "125" }} />} title="Secure" btnTitle="show me more"/>
        <Grid icon={<EventNoteIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} title="Reliable" btnTitle="show me more"/>
        <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}} />} title="Performant" btnTitle="show me more"/>
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
        <Grid icon={<ImportExportIcon style={{ fill: "#5EA780", height: "125", width: "125" }} />} title="Modular" btnTitle="show me more"/>
        <Grid icon={<ComputerIcon style={{ fill: "#E69426", height: "125", width: "125" }} />} title="Multi-Platform" btnTitle="show me more"/>
        <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}} />} title="Connected" btnTitle="show me more"/>
        </div>

        <div className={classes.bigSpace}>
        <Footer></Footer>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
