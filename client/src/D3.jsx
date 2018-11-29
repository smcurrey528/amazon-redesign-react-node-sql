const data = [
  {rating: '5 stars', value: 50},
  {rating: '4 stars', value: 30},
  {rating: '3 stars', value: 10},
  {rating: '2 stars', value: 8},
  {rating: '1 star', value: 2}
];

// define dimensions of svg
const svgWidth = 500;  // width of entire svg
const svgHeight = 200; // height of svg
const textWidth = 115; // width of text section
const textGutter = 10; // text/bar spacing
const barMargin = 5; // bottom margin for bars
const defaultColor = '#6497ea'; // default bar color
const altColor = '#bc4545'; // alternative bar color

// any population larger than this is considered big
const popThreshold = 50;

// Get scales using d3 linear scales
const xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([textWidth, svgWidth - textWidth]);

const yScale = d3.scaleLinear()
  .domain([0, data.length])
  .range([0, svgHeight]);

// get bar height
const barHeight = yScale(1) - barMargin;

// function to render a bar for given element of data array
const renderBar = (datum, index) => {
  // props for town name
  const textProps = {
    x: textWidth - textGutter,
    y: yScale(index) + barMargin + barHeight / 2,
    textAnchor: 'end',
  };

  // props for population bars
  const barProps = {
    x: textWidth,
    y: yScale(index),
    width: xScale(datum.pop),
    height: barHeight,
    fill: datum.pop < popThreshold
              ? defaultColor
              : altColor,
    rx: 5,
    ry: 5,
  };

  // props for numbers on end
  const numberProps = {
    x: textWidth + xScale(datum.pop) - textGutter,
    y: yScale(index) + barMargin + barHeight / 2,
    textAnchor: 'end',
  };

  // Be way of making changes below here!
  return (
  <g key={index}>
      <text {...textProps}>{datum.town}</text>
      <rect {...barProps}/>
      <text {...numberProps}>{datum.pop}</text>
  </g>
  );
}; // end of renderBar function

// see my 'Map, Filter, Reduce' Tiddly Bit to learn about rendering with Array.map()
ReactDOM.render(
  <svg width={svgWidth} height={svgHeight}>
    {data.map(renderBar)}
  </svg>,
  document.getElementById("root")
);

// Dependencies:
// React v15.4.2
// ReactDOM v15.4.2
// d3 v4.5.0
