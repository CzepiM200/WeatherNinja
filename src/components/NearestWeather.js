import React, { Component } from 'react';

//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/04d.png
const basedIconURL = 'http://openweathermap.org/img/wn';
const celsius = 273.15;


function genereateIconURL(iconName) {
    let URL = `${basedIconURL}/${iconName}@2x.png`;
    return URL;
}


export class NearestWeather extends Component {
    render() {
        return (
            <div>
                <div id="main-panel" className="row top-buffer">
                    <ul className="list-group list-group-horizontal full-flex">
                        <li className="list-group-item list-group-item-dark full-flex">
                            <b>{this.props.location} {this.props.weather.dt_txt.substr(0,16)}</b><br></br>
                            <img id="weather-icon" src={genereateIconURL(this.props.weather.weather[0].icon)} alt="..."></img>
                        </li>
                    </ul>
                </div>
                <div id="latest-panel" className="row top-buffer">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item"><b>Temp:</b> {(this.props.weather.main.temp - celsius).toFixed(2)}°C</li>
                        <li className="list-group-item"><b>Wind:</b> {(this.props.weather.wind.speed).toFixed(2)}km/h</li>
                        <li className="list-group-item"><b>Humidity:</b> {(this.props.weather.main.humidity).toFixed(2)}%</li>
                        <li className="list-group-item"><b>Clouds:</b> {(this.props.weather.clouds.all).toFixed(2)}%</li>
                    </ul>
                </div>
            </div>
            );
    }
}

export default NearestWeather;