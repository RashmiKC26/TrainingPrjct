import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInEntryComponent } from './linked-in-entry.component';

describe('LinkedInEntryComponent', () => {
  let component: LinkedInEntryComponent;
  let fixture: ComponentFixture<LinkedInEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedInEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
