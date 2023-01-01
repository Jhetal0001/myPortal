import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicvComponent } from './micv.component';

describe('MicvComponent', () => {
  let component: MicvComponent;
  let fixture: ComponentFixture<MicvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
