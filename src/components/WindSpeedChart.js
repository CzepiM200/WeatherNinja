import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  lables: [],
  datasets: [
    {
      label: 'Wind speed [m/s]',
      fill: true,
      backgroundColor: '#ffcc99' ,
      borderColor: '#ffb266',
      borderDashOffset: 0.0,
      pointBackgroundColor: '#fff',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ffb266',
      pointHoverBorderColor: '#000',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 5,
      data: []
    }
  ],
  options: {
    responsive: true
  }
};

export class WindSpeedChart extends Component{
  render(){
    data.datasets[0].data = this.props.windSpeed;
    data.labels = this.props.labels;
    
    return ( 
      <div>
          <Line data={data} redraw/>
      </div>
   );
  }
}

export default WindSpeedChart;