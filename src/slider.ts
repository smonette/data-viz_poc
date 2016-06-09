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
        var targ1 = d3.select('#chart1'); 
        var targ2 = d3.select('#chart2'); 


        $( "#slider-range" ).slider({
          range: true,
          min: 2000,
          max: 2007,
          step:1,
          values: [ 2000, 2007 ],
          slide: function( event, ui ) {
            if ((ui.values[ 1 ] - ui.values[ 0 ]) > 0) {     
              $( ".amount" ).text( ui.values[ 0 ] + " - " + ui.values[ 1 ] );

              updateChart("data/data_wf_simple.csv", targ1, 500, 400, ui.values[ 0 ], ui.values[ 1 ]);
              updateChart("data/data_wf_simple_2.csv", targ2, 500, 400, ui.values[ 0 ], ui.values[ 1 ]);
            }

          }
        });
        $( ".amount" ).text($( "#slider-range" ).slider( "values", 0 ) +
          " - " + $( "#slider-range" ).slider( "values", 1 ) );

    }


  
}
