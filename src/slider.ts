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
	  min: new Date('2000-01-01').getTime(),
	  max: new Date('2016-01-01').getTime(),
          step:90 * 24 * 60 * 60,
	  value: new Date('2010-01-01').getTime(),
          values: [
		new Date('2000-01-01').getTime(),
		new Date('2000-04-01').getTime(),
		new Date('2000-08-01').getTime(),
		new Date('2000-12-01').getTime()
	 ],
          slide: function( event, ui ) {
            #$( ".amount" ).text( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		console.log("step is " + (90*24*60*60));
            $( ".amount" ).text( new Date(ui.values[ 0 ]).toDateString() + " - " + new Date(ui.values[ 1 ] ).toDateString());
          }
        });
        $( ".amount" ).text($( "#slider-range" ).slider( "values", 0 ) +
          " - " + $( "#slider-range" ).slider( "values", 1 ) );
      });

    }
    getData() {
          return [
		new Date('2000-01-01').getTime(),
		new Date('2000-04-01').getTime(),
		new Date('2000-08-01').getTime(),
		new Date('2000-12-01').getTime()
	 ]
    }
	
}
