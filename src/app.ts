import { Component } from 'angular2/core';
import { Slider } from './slider.ts';

@Component({
  selector: 'app',
  templateUrl: 'src/app.html', 
  directives: [ Slider ]
})

export class App {
  
  ciList = [ 123,125,155,123,125,155,123,125,155,123,125,155,123,125,155,123,125,155,235,234,123,125,155,123,125,155,123,125,155,123,125,155,123,125,155,123,125,155,235,234,125,155,235,234 ];   
  
  onClick(){
    alert(this.ciList);
  }
};