import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchParamsComponent } from './header-search-params.component';

describe('HeaderSearchParamsComponent', () => {
  let component: HeaderSearchParamsComponent;
  let fixture: ComponentFixture<HeaderSearchParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
