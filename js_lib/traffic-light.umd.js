(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TrafficLight = {}, global.ng.core));
})(this, (function (exports, core) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    exports.TrafficLightComponent = class TrafficLightComponent {
        thresholdGreenYellow = 33;
        thresholdYellowRed = 66;
        value = 0;
        isGreenOn = false;
        isYellowOn = false;
        isRedOn = false;
        constructor() { }
        ngOnInit() {
            this.update(this.value);
        }
        update(value) {
            this.value = value;
            this.turnOff();
            if (this.value < this.thresholdGreenYellow) {
                this.isGreenOn = true;
            }
            else if (this.value < this.thresholdYellowRed) {
                this.isYellowOn = true;
            }
            else {
                this.isRedOn = true;
            }
        }
        setThresholds(thresholdGreenYellow, thresholdYellowRed) {
            this.thresholdGreenYellow = thresholdGreenYellow;
            this.thresholdYellowRed = thresholdYellowRed;
            this.update(this.value);
        }
        turnOff() {
            this.isGreenOn = false;
            this.isYellowOn = false;
            this.isRedOn = false;
        }
    };
    __decorate([
        core.Input()
    ], exports.TrafficLightComponent.prototype, "thresholdGreenYellow", void 0);
    __decorate([
        core.Input()
    ], exports.TrafficLightComponent.prototype, "thresholdYellowRed", void 0);
    __decorate([
        core.Input()
    ], exports.TrafficLightComponent.prototype, "value", void 0);
    exports.TrafficLightComponent = __decorate([
        core.Component({
            selector: 'traffic-light',
            imports: [],
            template: `
    <div class="traffic-light">
      <div class="red light" [class.on]="isRedOn"></div>
      <div class="yellow light" [class.on]="isYellowOn"></div>
      <div class="green light" [class.on]="isGreenOn"></div>
    </div>
  `,
            styleUrls: ['traffic-light.component.css']
        })
    ], exports.TrafficLightComponent);

}));
