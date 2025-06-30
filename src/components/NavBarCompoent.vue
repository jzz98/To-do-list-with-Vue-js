<template>
  <nav class="relative container mx-auto p-6 z-10">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <span class="text-3xl font-bold text-darkBlue">Task<span class="text-teal">Joy</span></span>
      </div>
      
      <!-- Desktop Menu -->
      <div class="desktop-menu hidden md:flex space-x-6">
        <a href="#features" class="hover:text-teal transition-colors duration-300">Funcionalidades</a>
        <a href="#pricing" class="hover:text-teal transition-colors duration-300">Precios</a>
        <a href="#contact" class="hover:text-teal transition-colors duration-300">Contacto</a>
      </div>
      
      <!-- Desktop Buttons -->
      <div class="hidden md:flex space-x-4">
        <a href="javascript:void(0)" class="px-5 py-2 text-teal border border-teal rounded-full hover:bg-teal hover:text-white transition-colors duration-300">Iniciar sesión</a>
        <a href="javascript:void(0)" class="px-5 py-2 text-white bg-teal rounded-full hover:bg-opacity-90 transition-colors duration-300">Registrarse</a>
      </div>
      
      <!-- Mobile menu button -->
      <button class="md:hidden focus:outline-none">
        <i class="fa-solid fa-bars text-2xl text-darkBlue"></i>
      </button>
    </div>
    
    <!-- Mobile menu -->
    <div class="mobile-menu md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-8">
      <button class="absolute top-6 right-6 text-2xl">
        <i class="fa-solid fa-times"></i>
      </button>
      <div class="flex flex-col items-center space-y-8 text-xl">
        <a href="#features" class="hover:text-teal transition-colors duration-300">Funcionalidades</a>
        <a  href="#pricing" class="hover:text-teal transition-colors duration-300">Precios</a>
        <a  href="#contact" class="hover:text-teal transition-colors duration-300">Contacto</a>
        <a href="javascript:void(0)" class="px-5 py-2 text-teal border border-teal rounded-full hover:bg-teal hover:text-white transition-colors duration-300 w-full text-center">Iniciar sesión</a>
        <a href="javascript:void(0)" class="px-5 py-2 text-white bg-teal rounded-full hover:bg-opacity-90 transition-colors duration-300 w-full text-center">Registrarse</a>
      </div>
    </div>
  </nav>
</template>

<style>
/* Estilos para el navbar */
.mobile-menu {
  transition: all 0.3s ease-in-out;
}

/* Asegurar que el navbar se mantenga en la parte superior */
nav {
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

/* Estilos para los enlaces */
.nav-link {
  position: relative;
}

.nav-link:hover::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4dd0e1;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

/* Animación para el menú móvil */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.mobile-menu a {
  animation: fadeIn 0.3s ease forwards;
}

.mobile-menu a:nth-child(1) { animation-delay: 0.1s; }
.mobile-menu a:nth-child(2) { animation-delay: 0.2s; }
.mobile-menu a:nth-child(3) { animation-delay: 0.3s; }
.mobile-menu a:nth-child(4) { animation-delay: 0.4s; }
.mobile-menu a:nth-child(5) { animation-delay: 0.5s; }
</style> 