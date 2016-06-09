System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var Slider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Slider = (function () {
                function Slider(elementRef) {
                    this.visibility = 'hidden';
                    this.elementRef = elementRef;
                }
                Slider.prototype.updSlider = function () {
                    jQuery(this.elementRef.nativeElement).find("#slider-range")
                        .slider("option", "value", this.slideValue);
                };
                Slider.prototype.ngAfterViewInit = function () {
                    $(function () {
                        var targ1 = d3.select('#chart1');
                        var targ2 = d3.select('#chart2');
                        $("#slider-range").slider({
                            range: true,
                            min: 2000,
                            max: 2007,
                            step: 1,
                            values: [2000, 2007],
                            slide: function (event, ui) {
                                $(".amount").text(ui.values[0] + " - " + ui.values[1]);
                                console.log("STEPHS CONSOLE:" + ui.values[0] + ", " + ui.values[1]);
                                updateChart("data/data_wf_simple.csv", targ1, 500, 400, ui.values[0], ui.values[1]);
                                updateChart("data/data_wf_simple_2.csv", targ2, 500, 400, ui.values[0], ui.values[1]);
                            }
                        });
                        $(".amount").text($("#slider-range").slider("values", 0) +
                            " - " + $("#slider-range").slider("values", 1));
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Slider.prototype, "slideValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Slider.prototype, "index", void 0);
                Slider = __decorate([
                    core_1.Component({
                        selector: 'my-slider',
                        templateUrl: 'src/slider.html'
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Slider);
                return Slider;
            }());
            exports_1("Slider", Slider);
        }
    }
});
//# sourceMappingURL=slider.js.map