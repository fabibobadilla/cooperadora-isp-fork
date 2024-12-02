// pages/auth/signin.js
import { signIn } from 'next-auth/client';

export default function SignIn() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username: e.target.username.value,
      password: e.target.password.value,
    });
    if (result.error) {
      // Maneja errores
    } else {
      // Redirige al usuario si la autenticación es exitosa
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" required />
      <input name="password" type="password" required />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
