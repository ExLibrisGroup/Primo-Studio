import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as _ from "lodash";
import {TestResult} from "../classes/test-result";

@Injectable({
    providedIn: 'root'
})
export class TestsService {
    private _suites: string[];
    private protractorConfTsUrl: string;
    public _haveResults: boolean;
    public _isSubscribed: boolean;
    private results: {results:TestResult[]};

    constructor(private http: HttpClient) {
        this.protractorConfTsUrl = "https://raw.githubusercontent.com/gilax/Primo-protractor-tests/master/protractor.conf.ts";
        this._isSubscribed = false;
        this._haveResults = false;
        this.results = undefined;
    }

    fetchSuites(): Observable<string[]> {
        return new Observable<string[]>(observer => {
            if (this._suites) {
                observer.next(this._suites);
                observer.complete();
            } else {
                this.http.get(this.protractorConfTsUrl, {responseType: "text"}).subscribe((data) => {
                    this._suites = this.exportSuitesFromFile(data);
                    observer.next(this._suites);
                    observer.complete();
                }, (err) => {
                    console.log('oops something went wrong while fetching suites array: ' + JSON.stringify(err));
                });
            }
        });
    }

    signUp(suites: string[]): Observable<any> {
        return this.http.put('/tests-sign-up', suites, {responseType: "text"});
    }

    private exportSuitesFromFile(data: string): string[] {
        let suites = [];
        let match: RegExpMatchArray;
        let suitesRegex = /suites:\s*({(?:\s*\S*:\s*[^,}]*,?)*})/;
        let keysRegex = /([^\s:]*):\s*(?:[^,]+,|[^}]+})/g;
        let protractorConfigSuitesJson = data.match(suitesRegex)[1];
        while ((match = keysRegex.exec(protractorConfigSuitesJson)) != null) {
            suites.push(match.pop());
        }
        return suites;
    }

    public getSignedSuites(): Observable<any> {
        return this.http.get<any>('/signed-params');
    }

    public removeSignedParams(): Observable<any> {
        return this.http.delete('/signed-params', {responseType: "text"});
    }

    public getResults(): Observable<{results:TestResult[]}> {
        return new Observable<{results:TestResult[]}>(observer => {
            if (!this.results) {
                this.http.get<any>('/test-results').subscribe(results => {
                    this.results = results;
                    this._haveResults = !_.isEmpty(results);
                    observer.next(this.results);
                    observer.complete();
                });
            } else {
                observer.next(this.results);
                observer.complete();
            }
        });
    }

    public get haveResults(): boolean {
        return this._haveResults && this.isSubscribed;
    }

    public get isSubscribed(): boolean {
        return this._isSubscribed;
    }

    public set isSubscribed(isSubscribed: boolean) {
        this._isSubscribed = isSubscribed;
        if (isSubscribed) {
            this.http.get<any>('/test-results').subscribe(results => {
                this.results = results;
                this._haveResults = !_.isEmpty(results);
            });
        }
    }
}
