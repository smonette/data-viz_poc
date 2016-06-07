import {Component, ElementRef, Inject, AfterViewInit, Input} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'my-slider',
    templateUrl: 'src/slider.html'
})

export class Slider implements AfterViewInit {
        
    @Input() slideValue: number;    
    elementRef: ElementRef;
    visibility = 'hidden';
    @Input() index: number;
    
    constructor(@Inject(ElementRef) elementRef: ElementRef) {
      this.elementRef = elementRef;
    }

    updSlider() {
      jQuery(this.elementRef.nativeElement).find("#slider-range")
      .slider("option", "value", this.slideValue);      
    }

    ngAfterViewInit() { 

      $(function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 500,
          step:5,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( ".amount" ).text( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( ".amount" ).text($( "#slider-range" ).slider( "values", 0 ) +
          " - " + $( "#slider-range" ).slider( "values", 1 ) );
      });

    }
}