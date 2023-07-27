import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgottenPasswordPage } from './forgotten-password.page';

describe('ForgottenPasswordPage', () => {
  let component: ForgottenPasswordPage;
  let fixture: ComponentFixture<ForgottenPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgottenPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
