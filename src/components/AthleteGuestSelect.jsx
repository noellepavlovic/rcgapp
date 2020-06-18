import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "../App.css";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

class AthleteGuestSelect extends Component {
  handleInputChange = (e) => {
    e.preventDefault();

    this.props.setCurrentUser(e.target.value);
  };

  render() {
    if (!this.props.athletes) {
      return <div></div>;
    }
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Who would you like to check-in?
          </Grid>
        </Grid>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>Yourself&nbsp;</label>
            </Grid>

            <Grid item xs={3}>
              <input
                name="whichAthlete"
                type="radio"
                value={this.props.userData.data.uuid}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </form>

        <form>
          {this.props.athletes.map((item, i) => (
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <label>
                  {item.first_name}&nbsp;
                  {item.last_name}&nbsp;
                </label>
              </Grid>

              <Grid item xs={3}>
                <input
                  name="whichAthlete"
                  type="radio"
                  value={item.uuid}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          ))}
        </form>
      </div>
    );
  }
}

export default AthleteGuestSelect;
