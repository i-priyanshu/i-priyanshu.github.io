import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    margin: 10,
    background: "#2e2e2e",
    textAlign: "center",
  },
});

let theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

theme = responsiveFontSizes(theme);

const HomeCard = () => {
  const classes = useStyles();

  return (
    <div>
      <ThingsTitle>Things I Love</ThingsTitle>
      <MaterialCards>
        <ThemeProvider theme={theme}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                FrontEnd
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                I'm more front end focused and love to work with Reactjs as well
                as pure HTML, CSS .
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                React
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                React has made my life a lot easier with Front-End development.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Typescript
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                The best part about typescript is that, it tells you beforehand
                about simple error. this has made my life a lot easier.
              </Typography>
            </CardContent>
          </Card>
        </ThemeProvider>
      </MaterialCards>
    </div>
  );
};

export default HomeCard;

const MaterialCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 6rem;
  @media (max-width: 768px) {
    display: block;
    margin-left: 5rem;
  }

  @media (max-width: 400px) {
    margin-left: 2rem;
  }
`;

const ThingsTitle = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
`;
