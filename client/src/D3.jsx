import React, { Component } from 'react';
import * as d3 from "d3";
import * as c3 from "c3";


class D3 extends Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: this.props.chartType,
      }
    });
  }
  render() {
    return <div id="chart">data is the best</div>;
  }
}


export default D3;
