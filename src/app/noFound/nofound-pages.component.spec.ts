import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofoundPagesComponent } from './nofound-pages.component';

describe('NofoundPagesComponent', () => {
  let component: NofoundPagesComponent;
  let fixture: ComponentFixture<NofoundPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NofoundPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NofoundPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
