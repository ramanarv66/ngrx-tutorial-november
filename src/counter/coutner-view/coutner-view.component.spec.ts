import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutnerViewComponent } from './coutner-view.component';

describe('CoutnerViewComponent', () => {
  let component: CoutnerViewComponent;
  let fixture: ComponentFixture<CoutnerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutnerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoutnerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
