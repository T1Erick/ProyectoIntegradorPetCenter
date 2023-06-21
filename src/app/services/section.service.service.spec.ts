import { TestBed } from '@angular/core/testing';

import { SectionFlatService } from './section.service.service';

describe('SectionFlatService', () => {
  let service: SectionFlatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionFlatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
