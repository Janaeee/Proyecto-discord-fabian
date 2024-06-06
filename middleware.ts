import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Definir las rutas públicas
const publicRoutes = createRouteMatcher(['/sign-in', '/sign-up', '/api/uploadthing']);

export default clerkMiddleware((auth, request) => {
  // Si la ruta no es pública, protegerla con Clerk
  if (!publicRoutes(request)) {
    auth().protect();
  }
});

export const config = {
  // Configuración del matcher para Clerk
  matcher: [
    "/((?!.*\\..*|_next).*)", // Todas las rutas excepto las que contienen un punto o _next
    "/", // La raíz del sitio
    "/(api|trpc)(.*)" // Las rutas API o trpc
  ],
};
