import React, { Component } from 'react';
import NearestWeather from './NearestWeather';
import SubsequentWeather from './SubsequentWeather';


export class WeatherPanel extends Component {
    render() {
        if (this.props.weather.length > 1) {
            return (
                <div>
                    <div className="row justify-content-center top-buffer full-flex">
                        <NearestWeather weather={this.props.weather[0]} location={this.props.location}/>
                    </div>
                    <div className="row justify-content-center top-buffer">
                        <SubsequentWeather weather={this.props.weather}/>
                    </div>
                </div>
            );
        }
        return (<div></div>);
    };
}

export default WeatherPanel;