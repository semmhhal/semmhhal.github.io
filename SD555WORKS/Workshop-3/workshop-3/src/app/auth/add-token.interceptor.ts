import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  if (auth.isLoggedin()) {
    const reqwithToken = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${auth.state$().jwt}`),
    });
    return next(reqwithToken);
  } else {
    return next(req);
  }
};
