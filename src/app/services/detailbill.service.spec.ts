import { TestBed } from '@angular/core/testing';

import { DetailbillService } from './detailbill.service';

describe('DetailbillService', () => {
  let service: DetailbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
