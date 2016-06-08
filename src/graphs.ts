import { Component } from 'angular2/core';

@Component({
  selector: 'my-graphs',
  templateUrl: 'src/graphs.html'
})

export class Graphs implements AfterViewInit {
  

    ngAfterViewInit() { 

      $(function() {
          var targ1 = d3.select('#chart1'); 
          drawChart("data/data_wf_simple.csv", targ1, 500, 400);

          var targ2 = d3.select('#chart2'); 
          drawChart("data/data_wf_simple_2.csv", targ2, 500, 400);

      });

    }

};