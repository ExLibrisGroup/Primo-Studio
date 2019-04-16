import {Component, OnInit} from '@angular/core';
import {TestsService} from "../tests.service";
import {TestResult} from "../../classes/test-result";
import * as _ from 'lodash';

@Component({
    selector: 'prm-tests-results',
    templateUrl: './tests-results.component.html',
    styleUrls: ['./tests-results.component.scss']
})
export class TestsResultsComponent implements OnInit {

    public lastModified: Date;
    public _results: TestResult[];

    constructor(public testsService: TestsService) {
        this._results = undefined;
    }

    ngOnInit() {
        this.testsService.getResults().subscribe(results => {
            let grouped = _.groupBy(results.results, 'description');
            this._results = _.map(grouped, arr => {
                return arr.reduce((prev, curr) => {
                    prev.assertions = prev.assertions.concat(curr.assertions);
                    prev.duration += curr.duration;
                    return prev;
                });
            });

            this.lastModified = results["last-modified"];
        });
    }

    public get results(): TestResult[] {
        return this._results;
    }

    public isPassed(result: TestResult): boolean {
        result.firstFailure = _.reduce(result.assertions, (previousValue, currentValue) => previousValue.passed ? currentValue : previousValue);
        return result.firstFailure.passed;
    }

    private getNumberOfPassedOrNotPassed(passed: boolean) {
        return this._results.map(testResult => testResult.assertions)
                            .reduce((allAssertions, assertionArray) => allAssertions.concat(assertionArray))
                            .filter(assertion => assertion.passed === passed)
                            .length
    }

    getNumberOfPassed() {
        return this.getNumberOfPassedOrNotPassed(true);
    }

    getNumberOfFailed() {
        return this.getNumberOfPassedOrNotPassed(false);
    }
}
