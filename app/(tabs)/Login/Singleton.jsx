// Singleton para manejar la sesión del usuario
class UserSession {
    static instance = null;
    user = null;
  
    static getInstance() {
      if (!UserSession.instance) {
        UserSession.instance = new UserSession();
      }
      return UserSession.instance;
    }
  
    setUser(userData) {
      this.user = userData;
    }
  
    getUser() {
      return this.user;
    }
  }
  
  export default UserSession;