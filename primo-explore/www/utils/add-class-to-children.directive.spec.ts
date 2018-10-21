import { AddClassToChildrenDirective } from './add-class-to-children.directive';
import {TestBed} from "@angular/core/testing";

describe('AddClassToChildrenDirective', () => {
  let directive: AddClassToChildrenDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClassToChildrenDirective]
    });
    directive = TestBed.get(AddClassToChildrenDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
