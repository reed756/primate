import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimateInfoPage } from './primate-info.page';

describe('PrimateInfoPage', () => {
  let component: PrimateInfoPage;
  let fixture: ComponentFixture<PrimateInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimateInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
