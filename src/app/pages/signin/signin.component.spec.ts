import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  describe('given form', () => {
    //_________________________________________________________________________________________
    it('when email is empty, then recover password button should be disabled', () => {
      component.form.get('email')?.setValue('');
      fixture.detectChanges();

      expect(
        page.querySelector('[test-id="recover-password-button"]').disabled
      ).toBeTruthy();
    });

    it('when email is invalid, then recover password button should be disabled', () => {
      component.form.get('email')?.setValue('invalidEmail');
      fixture.detectChanges();

      expect(
        page.querySelector('[test-id="recover-password-button"]').disabled
      ).toBeTruthy();
    });

    it('when email is valid, then recover password button should be enabled', () => {
      component.form.get('email')?.setValue('valid@email.com');
      fixture.detectChanges();

      expect(
        page.querySelector('[test-id="recover-password-button"]').disabled
      ).toBeFalsy();
    });

    it('when email is empty, then login button should be disabled', () => {
      component.form.get('email')?.setValue('');
      component.form.get('password')?.setValue('');
      fixture.detectChanges();

      expect(
        page.querySelector('[test-id="login-button"]').disabled
      ).toBeTruthy();
    });

    it('when email is invalid, then login button should be disabled', () => {
      component.form.get('email')?.setValue('invalidEmail');
      component.form.get('password')?.setValue('');
      fixture.detectChanges();

      expect(
        page.querySelector('[test-id="login-button"]').disabled
      ).toBeTruthy();
    });
    it('when password is empty, then login button should be disabled', () => {
      component.form.get('email')?.setValue('valid@email.com');
      component.form.get('password')?.setValue('');
      fixture.detectChanges();

      expect(
        page.querySelector('[test-id="login-button"]').disabled
      ).toBeTruthy();
    });
    it('when password is valid, then login button should be enabled', () => {
      component.form.get('email')?.setValue('valid@email.com');
      component.form.get('password')?.setValue('anyPassword');
      fixture.detectChanges();

      expect(
        page.querySelector('[test-id="login-button"]').disabled
      ).toBeFalsy();
    });
  });
});
