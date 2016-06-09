function removeChart(targ){
  targ.select("svg").remove();
}


function updateChart(data, targ, w, h, min, max){
  removeChart(targ);

   var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = w - margin.left - margin.right,
      height = h - margin.top - margin.bottom; 
  

  var x = d3.scale.linear()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(max-min)
      .tickFormat(d3.format(""));

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var line = d3.svg.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.var); });


  var svg = targ.append("svg")
            .attr("width", w)
            .attr("height", h)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  function filterByYear(obj){
    if(+obj.year >= min && +obj.year <= max){
      return true;
    }
    return false;
  }


  d3.csv(data, type, function(error, data) {
    if (error) throw error;

   var filtered = data.filter(filterByYear);
    
    x.domain(d3.extent(filtered, function(d) {console.log(d); return d.year; }));
    //y.domain(d3.extent(data, function(d) { return +d.var; })); // keep this, inc case they don't want 0-axis
    y.domain([0, d3.max(data, function(d){ return +d.var; })])  // make sure y axis starts at 0

    svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("VAR (%)");

      svg.append("path")
          // .datum(data)
          .datum(filtered)
          .attr("class", "line")
          .attr("d", line);
  });  
}


function drawChart(data, targ, w, h){
 
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = w - margin.left - margin.right,
      height = h - margin.top - margin.bottom; 
  // var formatDate = d3.time.format("%Y");

  var x = d3.scale.linear()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.format(""));

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var line = d3.svg.line()
      .x(function(d) { return x(d.year); })
      .y(function(d) { return y(d.var); });


  var svg = targ.append("svg")
            .attr("width", w)
            .attr("height", h)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  d3.csv(data, type, function(error, data) {
    if (error) throw error;
    
    x.domain(d3.extent(data, function(d) {console.log(d); return d.year; }));
    //y.domain(d3.extent(data, function(d) { return +d.var; }));
    y.domain([0, d3.max(data, function(d){ return +d.var; })])  // make sure y axis starts at 0

    svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("VAR (%)");

      svg.append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", line);
  });
}

function type(d) {

  //d.year = d.Year; //formatDate.parse(d.date);
  d.year = d3.format("4")(d.Year);


  // d.year = new Date(+d.Year, 0, 1)
  d.var = +d.VAR;
  //console.log(d);
  return d;
}