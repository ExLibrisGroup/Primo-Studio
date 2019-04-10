class Assertion {
    public passed: boolean;
    public errorMsg?: string;
    public stackTrace?: string;
}

export class TestResult {
    public description: string;
    public assertions: Assertion[];
    public duration: number;
    public firstFailure?: Assertion;
}
