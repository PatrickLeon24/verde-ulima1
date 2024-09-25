export const validateCredentials = (email, password, users) => {
    if (!email || !password) {
      return { valid: false, message: 'Por favor, complete todos los campos.' };
    }
  
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      return { valid: true, user };
    }
  
    return { valid: false, message: 'El correo o la contraseña ingresados son incorrectos.' };
  };