import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogspaceComponent } from './blogspace.component';

describe('BlogspaceComponent', () => {
  let component: BlogspaceComponent;
  let fixture: ComponentFixture<BlogspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
