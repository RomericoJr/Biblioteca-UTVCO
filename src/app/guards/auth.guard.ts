import { CanActivateChildFn } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }
  else {
    return true;
  }


};
