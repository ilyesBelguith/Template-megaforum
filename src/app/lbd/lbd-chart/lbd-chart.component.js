"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Chartist = require("chartist");
var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType = exports.ChartType || (exports.ChartType = {}));
var LbdChartComponent = /** @class */ (function () {
    function LbdChartComponent() {
    }
    LbdChartComponent_1 = LbdChartComponent;
    LbdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "lbd-chart-" + LbdChartComponent_1.currentId++;
    };
    LbdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new Chartist.Pie("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new Chartist.Line("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new Chartist.Bar("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    LbdChartComponent.currentId = 1;
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "subtitle");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "chartClass");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "chartType");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "chartData");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "chartOptions");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "chartResponsive");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "footerIconClass");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "footerText");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "legendItems");
    __decorate([
        core_1.Input()
    ], LbdChartComponent.prototype, "withHr");
    LbdChartComponent = LbdChartComponent_1 = __decorate([
        core_1.Component({
            selector: 'lbd-chart',
            templateUrl: './lbd-chart.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], LbdChartComponent);
    return LbdChartComponent;
    var LbdChartComponent_1;
}());
exports.LbdChartComponent = LbdChartComponent;
//# sourceMappingURL=lbd-chart.component.js.map