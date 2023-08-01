import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimatesGuidePage } from './primates-guide.page';

describe('PrimatesGuidePage', () => {
  let component: PrimatesGuidePage;
  let fixture: ComponentFixture<PrimatesGuidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimatesGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
