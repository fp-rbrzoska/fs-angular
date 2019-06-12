import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowItemComponent } from './slideshow-item.component';

describe('SlideshowItemComponent', () => {
  let component: SlideshowItemComponent;
  let fixture: ComponentFixture<SlideshowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
