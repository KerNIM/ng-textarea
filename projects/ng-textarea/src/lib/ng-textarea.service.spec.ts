import { TestBed } from '@angular/core/testing';

import { NgTextareaService } from './ng-textarea.service';

describe('NgTextareaService', () => {
  let service: NgTextareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTextareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
