import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'forgotten-password',
    loadChildren: () => import('./pages/forgotten-password/forgotten-password.module').then(m => m.ForgottenPasswordPageModule),
    ...canActivate(redirectLoggedInToHome),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
