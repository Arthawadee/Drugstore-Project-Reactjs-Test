import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { Bar, Pie, Line } from "react-chartjs-2";

export default class graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // highestRate: '',
      chartData: {
        labels: [
          "Smoking",
          "Stroke",
          "COPD",
          "Asthma"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    };
  }

  componentDidMount(){
    var data = this.state.chartData.datasets[0].data;
    var max  = data.indexOf(Math.max.apply(null, data));
    //  console.log('the highestRate is '+ max)
    this.setState({highestRate : this.state.chartData.labels[max]})
  }
  render() {
    return (
      <div className="GraphPage">
        <Header as="h1">GraphPage</Header>

        <Bar
          data={this.state.chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "The highest rate is " + this.state.highestRate,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "top"
            }
          }}
        />



<Pie
          data={this.state.chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "The highest rate is " + this.state.highestRate,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "top"
            }
          }}
        />



<Line
          data={this.state.chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "The highest rate is " + this.state.highestRate,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "top"
            }
          }}
        />
      </div>
    );
  }
}
