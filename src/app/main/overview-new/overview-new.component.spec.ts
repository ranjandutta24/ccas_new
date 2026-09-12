import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewNewComponent } from './overview-new.component';

describe('OverviewNewComponent', () => {
  let component: OverviewNewComponent;
  let fixture: ComponentFixture<OverviewNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
