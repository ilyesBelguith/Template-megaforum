"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var addforum_component_1 = require("./addforum.component");
describe('AddforumComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [addforum_component_1.AddforumComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(addforum_component_1.AddforumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=addforum.component.spec.js.map