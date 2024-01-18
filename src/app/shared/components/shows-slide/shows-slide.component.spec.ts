import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowsSlideComponent } from './shows-slide.component';

describe('ShowsSlideComponent', () => {
  let component: ShowsSlideComponent;
  let fixture: ComponentFixture<ShowsSlideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ShowsSlideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
