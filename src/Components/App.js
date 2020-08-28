import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import HealthData from "./HealthData";

class App extends React.Component {
  state = {
    array: [],
    lastWeight: 0,
    lastPulse: 0,
    lastTemp: 0,
  };

  componentDidMount = () => {
    axios
      .get("https://run.mocky.io/v3/fa2716b1-f920-446f-829e-d6425effaa21")
      .then((response) => {
        var weight = 0;
        var pulse = 0;
        var temperature = 0;
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].type === "WEIGHT") {
            weight = response.data[i].value;
            //console.log(weight);
          } else if (response.data[i].type === "PULSE") {
            pulse = response.data[i].value;
            //console.log(pulse);
          } else if (response.data[i].type === "TEMPERATURE") {
            temperature = response.data[i].value;
            //console.log(temperature);
          }
        }
        // console.log(weight);
        // console.log(pulse);
        // console.log(temperature);
        this.setState({
          array: response.data,
          lastWeight: weight,
          lastPulse: pulse,
          lastTemp: temperature,
        });
      });
  };

  //   componentDidUpdate = () => {
  //     console.log(this.state.array);
  //     console.log(this.state.lastWeight);
  //     console.log(this.state.lastPulse);
  //     console.log(this.state.lastTemp);
  //   };
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              PetLeo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/healthdata">
                    HealthData
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path="/healthdata">
              <HealthData
                array={this.state.array}
                weight={this.state.lastWeight}
                pulse={this.state.lastPulse}
                temperature={this.state.lastTemp}
              />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// var dateString = response.data[0].timestamp;
//         var date = new Date(dateString);
//         console.log(date.getMonth() + 1);
//         console.log(date.getFullYear());

// var dateString = response.data[i].timestamp;
//             console.log(dateString);
//             var date = new Date(dateString);
//             console.log(date.getMonth() + 1);
//             console.log(date.getFullYear());

// var dateString1 = response.data[i].timestamp;
//             var date1 = new Date(dateString1);
//             var dateString2 = response.data[i + 1].timestamp;
//             var date2 = new Date(dateString2);
//             if (date2.getFullYear() > date1.getFullYear) {
//               weight = response.data[i + 1].value;
//               console.log(weight);
//             }
