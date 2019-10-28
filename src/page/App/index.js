import React, { Component } from "react";

//compoent layout
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";
// import Favorite from "@material-ui/icons/Favorite";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
//Compoent
import MultipleItems from "src/components/MultipleItems";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeatherRequest } from "src/redux/actions/weather";

function mapStateToProps(state) {
  return {
    store: {
      weather: state.weather
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators(
      {
        getWeatherRequest
      },
      dispatch
    )
  };
};

class App extends Component {
  state = {
    loading: false,
    units: "metric",
    isMetric: true
  };

  componentDidMount() {
    const { units } = this.state;
    this.fetchWeather(units);
  }

  fetchWeather = units => {
    this.props.action.getWeatherRequest(
      {
        q: "Munich",
        APPID: "75f972b80e26f14fe6c920aa6a85ad57",
        cnt: "5",
        units
      },
      () => this.setState({ loading: false }),
      () => this.setState({ loading: false })
    );
  };

  handelSwitTemperature = bool => {
    const units = bool ? "metric" : "imperial";
    this.setState({ isMetric: bool, units }, () => {
      this.fetchWeather(units);
    });
  };

  render() {
    const {
      store: {
        weather: {
          list: { data = [], city = {} }
        }
      }
    } = this.props;
    const { units, isMetric } = this.state;
    console.log(data);
    return (
      <div>
        <CssBaseline />
        <Container>
          <h2> Weather app </h2>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isMetric}
                  onChange={() => this.handelSwitTemperature(true)}
                  value="isMetric"
                />
              }
              label="Celsius"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={!isMetric}
                  onChange={() => this.handelSwitTemperature(false)}
                  value="isMetric"
                />
              }
              label="Fahrenheit"
            />
          </FormGroup>
          <MultipleItems data={data} city={city} units={units} />
        </Container>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
