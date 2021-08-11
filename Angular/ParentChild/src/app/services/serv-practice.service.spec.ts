import { TestBed } from '@angular/core/testing';

import { ServPracticeService } from './serv-practice.service';

describe('ServPracticeService', () => {
  let service: ServPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
