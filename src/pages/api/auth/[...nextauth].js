// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Implementa la lógica para verificar credenciales con tu backend
        const res = await fetch("https://your-backend-url.com/api/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        const user = await res.json();
        
        // Si el usuario es válido, retorna los datos de usuario
        if (res.ok && user) {
          return user;
        }
        // Si no es válido, retorna null
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin', // Personaliza la página de inicio de sesión si tienes una
  },
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  }
});
