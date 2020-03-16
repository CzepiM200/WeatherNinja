import React, { Component } from 'react';
import TemperatureChart from './TemperatureChart';
import WindSpeedChart from './WindSpeedChart';

const labels = [];
const temperatures = [];
const windSpeed = [];


export class SubsequentWeather extends Component {
    render () {
        for (let i = 0; i < this.props.weather.length; i++) {
            labels[i] = (this.props.weather[i].dt_txt.substr(0,16));
            temperatures[i] = parseInt((this.props.weather[i].main.temp - 273.15).toFixed(2), 10); 
            windSpeed[i] = parseInt((this.props.weather[i].wind.speed).toFixed(2), 10); 
        }
    
        return (
            <div id="charts" className="col-sm-12">
                <TemperatureChart labels={labels} temperatures={temperatures}/>
                <br></br>
                <WindSpeedChart labels={labels} windSpeed={windSpeed}/>
            </div>
        );
    }
}

export default SubsequentWeather;