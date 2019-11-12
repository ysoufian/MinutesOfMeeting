import React, { Component, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import PrimarySearchAppBar from "./components/header";
import MoMsEditor from "./components/minutesOfMeetings/add";
import "./styles.css";
import { TextField } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core/";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar />
        <Fragment>
          <Grid container spacing={0}>
            <Grid xs={8}>
              <div style={{ padding: 20 }}>
                <MoMsEditor />
              </div>
            </Grid>
            <Grid xs={4}>
              <Paper style={{ padding: 20 }}>
                <form>
                  <TextField
                    id="standard-required"
                    label="Project Name"
                    defaultValue="Enter the project name"
                    margin="normal"
                    fullWidth
                  />

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker label="Date" fullWidth margin="normal" />
                    <TimePicker label="Time" fullWidth margin="normal" />
                  </MuiPickersUtilsProvider>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
