/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params: any) {
  NavigationService.navigate('TabScreen', params);
}

export function navigateToForgotPassword(params?: any) {
  NavigationService.navigate('ForgotPassword', params);
}

export function navigateToSignUp(params?: any) {
  NavigationService.navigate('SignUp', params);
}