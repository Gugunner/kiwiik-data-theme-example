import React from "react";
import "./styles.css";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as _ from "lodash";
import { getColorsFromTheme } from "./utils";
import { linkTheme, textTheme } from "./theme";

const styles = makeStyles(linkTheme);

export default function App({ muiTheme }) {
  const palette = muiTheme.palette;
  const classes = styles();
  console.log(muiTheme);
  const primaryShaders = getColorsFromTheme(palette.primary.shaders);
  const secondaryShaders = getColorsFromTheme(palette.secondary.shaders);
  const primaryBoxes = getBoxes(primaryShaders);
  const secondaryBoxes = getBoxes(secondaryShaders);
  const textColors = getColorsFromTheme(palette.text);
  const textBoxes = getBoxes(textColors);
  const labelColors = getColorsFromTheme(palette.labels);
  const labelBoxes = getBoxes(labelColors);
  const otherColors = getColorsFromTheme(palette.others);
  const otherBoxes = getBoxes(otherColors);
  const colorHeadings = [
    "Primary Colors",
    "Secondary Colors",
    "Text Colors",
    "Label Colors",
    "Otros Colors"
  ];
  const boxes = [
    primaryBoxes,
    secondaryBoxes,
    textBoxes,
    labelBoxes,
    otherBoxes
  ];
  const headers = ["h1", "h2", "h3", "h4", "h5", "h6"];
  return (
    <div className="App">
      <h1>Kiwiik Data Theme</h1>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <h2>Box color theme</h2>
      <Grid container spacing={4} justify="center">
        {_.map(boxes, (box, idx) => {
          return (
            <>
              <Grid item xs={12} key={idx}>
                <Typography variant="h4">{colorHeadings[idx]}</Typography>
              </Grid>
              {box}
            </>
          );
        })}
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Headers</Typography>
        </Grid>
        {_.map(headers, header => (
          <Grid item xs={12} key={header}>
            <Typography variant={header}>{header}. Kiwiik Data</Typography>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography style={{ ...muiTheme.typography.blanktitle }}>
            Blank Slate Title
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ ...muiTheme.typography.blankbody }}>
            Blank Slate Body
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Body</Typography>
        </Grid>
        <Grid item xs={12}>
          <Link className={classes.bodylink} underline="none">
            Body Link Hover & Active
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link className={classes.bodylinkdisabled} underline="none">
            Body Link Disabled
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Body</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ backgroundColor: "#000", ...textTheme.snackbarSl }}
          >
            Snackbar/Text SL Style
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ ...textTheme.tablePagination }}>
            Table/Pagination/Component/Text Style
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ ...textTheme.fieldAssistiveActive }}>
            Text Field/Assistive Text/Active
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ ...textTheme.fieldAssistiveEnabled }}>
            Text Field/Assistive Text/Enabled
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ ...textTheme.darkLabel }}>
            Label/Text/Dark Style
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ backgroundColor: "#000", ...textTheme.lightLabel }}
          >
            Label/Text/Light Style
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

const getBoxes = obj =>
  _.map(obj, colorObj => {
    const value = _.head(_.values(colorObj));
    const materialKey = _.head(_.keys(colorObj));
    return (
      <Grid item xs={2} key={materialKey}>
        <Box color={value} materialKey={materialKey}>
          HEX: {value}
        </Box>
      </Grid>
    );
  });

const Box = ({ color, children, materialKey }) => {
  const style = {
    display: "flex",
    alignItems: "center"
  };
  return (
    <>
      <h6 style={{}}>Material: {materialKey}</h6>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          // border: "1px solid black",
          margin: "auto",
          ...style
        }}
      >
        {children}
      </div>
    </>
  );
};
