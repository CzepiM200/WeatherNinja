import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  lables: [],
  datasets: [
    {
      label: 'Temperature [°C]',
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderDashOffset: 0.0,
      pointBackgroundColor: '#fff',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
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

export class TemperatureChart extends Component{
  render(){
    data.datasets[0].data = this.props.temperatures;
    data.labels = this.props.labels;
    
    return ( 
      <div>
          <Line data={data} redraw/>
      </div>
   );
  }
}

export default TemperatureChart;