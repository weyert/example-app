/**
 * Session Configuration
 * (app.config.session)
 *
 * @see http://fabrix.app/doc/config/session.js
 */
export const session = {

  /**
   * Define the session implementation, e.g. 'jwt' or 'cookie'
   */
  strategy: 'jwt',

  /**
   * Define jwt-specific options
   */
  jwt: {
    secret: '',
    connection: 'localStorage',
    model: 'WebToken'
  },

  /**
   * Define cookie-specific options
   */
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }

}
