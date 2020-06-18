import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import swal from "sweetalert";
import Container from "@material-ui/core/Container";

class Question extends Component {
  renderType = (item) => {
    switch (item.question_type) {
      case "boolean":
        return (
          "<p><label>Yes&nbsp</label><input name=" +
          item.uuid +
          ' type="radio" value="1" required />&nbsp&nbsp<label>No&nbsp</label><input name=' +
          item.uuid +
          ' type="radio" value="0"  /></p>'
        );
      case "boolean_more1":
        return (
          "<p><label>Yes&nbsp</label><input name=" +
          item.uuid +
          ' type="radio" value="1" required />&nbsp&nbsp<label>No&nbsp</label><input name=' +
          item.uuid +
          ' type="radio" value="0"  /></p>'
        );
      case "temperature":
        return (
          "<p><label><p>Temperature:</p> <input name=" +
          item.uuid +
          ' type="text" value="" size="5" required/></label> <select> <option name="unit" selected value="degC">&degC</option><option name="unit" value="degF">&degF</option>  /></p>'
        );
      default:
        return "";
    }
  };

  submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const answers = [];

    formData.forEach((value, property) => (answers[property] = value));

    console.log(answers);

    //here you can update, remove, add values/properties in the body object this is specially usefull if any custom process must be done to check, encrypt data or wherever you want.

    // Request goes here.

    this.props.getAnswers(answers);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.agreement.questions.map((item, i) => (
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.question,
                }}
              />
            </Grid>

            <Grid item xs={2}>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.renderType(item),
                }}
              />
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12} align="left">
          If you answer yes to any of the questions or have a fever{" "}
          <b>DO NOT</b> come to Rose City Gymnastics Club
        </Grid>
        <Grid item xs={12} align="right">
          <input type="submit" value="Submit" />
        </Grid>
      </form>
    );
  }
}

export default Question;
