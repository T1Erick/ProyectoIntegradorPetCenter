import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPetComponent } from './forum-pet.component';

describe('ForumPetComponent', () => {
  let component: ForumPetComponent;
  let fixture: ComponentFixture<ForumPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
