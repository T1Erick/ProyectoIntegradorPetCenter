import { TestBed } from '@angular/core/testing';

import { ProductpetService } from './productpet.service';

describe('ProductpetService', () => {
  let service: ProductpetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductpetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
