import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CComponentComponent } from './c-component.component';

describe('CComponentComponent', () => {
  let component: CComponentComponent;
  let fixture: ComponentFixture<CComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
