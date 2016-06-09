import { Component } from 'angular2/core';
import { Slider } from './slider.ts';
import { Graphs } from './graphs.ts';

@Component({
  selector: 'app',
  templateUrl: 'src/app.html', 
  directives: [ Slider, Graphs ]
})

export class App {
  
};

