import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import WeatherPanel from './components/WeatherPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Wrocław",
      locationId: "3081366",
      weather: ["init"],
      URL: {
        protocol: "https",
        appid: "c9a9dab97a39c92e2fb1365560169a74",
        apiBasedURL: "api.openweathermap.org/data/2.5/forecast?id"
      },
      error: ""
    }
  }

  getWeatherPromise = async (locationId) => {
    return await axios.get(`${this.state.URL.protocol}://${this.state.URL.apiBasedURL}=${locationId}&appid=${this.state.URL.appid}`)
  };

  setNewWeather = (locationId) => {
    const pogodaPromise = this.getWeatherPromise(locationId);
    pogodaPromise.then((response) => {
      this.setState({ 
        location: response.data.city.name,
        locationId: locationId,
        weather: response.data.list
      });
    })    
  };

  componentDidMount() {
    this.setNewWeather(this.state.locationId);
  }

  handleChangeInputValue = async (e) => {
    this.setNewWeather(e.target.value);
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center top-buffer">
          <div className="col-md-8">
            <Form
              value={this.state.location}
              change={this.handleChangeInputValue}
              click={this.handleGetForecastButtonClick} />
          </div>
        </div>
        <WeatherPanel weather={this.state.weather} location={this.state.location} />
      </div>
    );
  }
}

export default App;
