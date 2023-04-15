import { Middleware } from '@nuxt/types';

const authMiddleware: Middleware = (context) => {
  if (!context.store.getters['auth/isAuthenticated']) {
    return context.redirect('/login')
  }
};

export default authMiddleware;