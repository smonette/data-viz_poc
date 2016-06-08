import { Component } from 'angular2/core';

@Component({
  selector: 'my-graphs',
  templateUrl: 'src/graphs.html'
})

export class Graphs implements AfterViewInit {
  

    ngAfterViewInit() { 

      $(function() {
        // for chart x
        // call draw(target,chartx)

      });

    }

};