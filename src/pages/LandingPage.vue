<script setup>
import NavBarCompoent from '@/components/NavBarCompoent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
<template>
  <!-- Background blobs -->
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>

  <NavBarCompoent />


  <!-- Hero Section -->
  <section class="relative py-12 md:py-20">
    <div class="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
      <div class="md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span class="block">Cumple tus tareas</span>
          <span class="block text-teal">con una sonrisa</span>
        </h1>
        <p class="text-lg md:text-xl mb-8 text-gray-600 max-w-md mx-auto md:mx-0">
          Una app minimalista y colorida para mantener tus listas de tareas organizadas y hacer que completarlas sea divertido.
        </p>
        <div class="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="javascript:void(0)" class="btn-pulse px-8 py-4 text-white bg-teal rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
            Comenzar prueba gratis
          </a>
          <a href="#features" class="px-8 py-4 text-darkBlue border border-gray-300 rounded-full text-lg font-medium hover:border-teal hover:text-teal transition-colors duration-300">
            Ver funciones
          </a>
        </div>
      </div>
      <div class="md:w-1/2 mb-10 md:mb-0 z-10">
        <div class="relative max-w-md mx-auto">
          <div class="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-teal">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <span class="w-3 h-3 bg-teal rounded-full mr-2"></span>
              Mis Tareas
            </h3>
            
            <div class="space-y-3 mt-6">
              <div class="checklist-item checked">Preparar presentación proyecto</div>
              <div class="checklist-item checked">Reunión con cliente</div>
              <div class="checklist-item">Revisar correos pendientes</div>
              <div class="checklist-item">Planificar sprint semanal</div>
              <div class="checklist-item">Actualizar documentación</div>
            </div>
            
            <div class="mt-6 flex rounded-lg border border-gray-200">
              <input type="text" placeholder="Añadir nueva tarea..." class="flex-grow px-4 py-2 bg-transparent focus:outline-none">
              <button class="bg-teal text-white px-4 rounded-r-lg">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-coral opacity-20 rounded-full"></div>
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-yellow opacity-20 rounded-full"></div>
        </div>
      </div>
    </div>
    
    <div class="hero-wave">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-gray-50"></path>
      </svg>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Características principales</h2>
        <p class="text-gray-600 max-w-md mx-auto">Simplifica tu gestión de tareas con nuestras herramientas fáciles de usar</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="feature-card bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="w-16 h-16 bg-teal bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <i class="fa-solid fa-plus text-2xl text-teal task-icon"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-center md:text-left">Creación fácil de tareas</h3>
          <p class="text-gray-600 text-center md:text-left">Añade y organiza tus tareas rápidamente con nuestra interfaz intuitiva</p>
        </div>
        
        <!-- Feature 2 -->
        <div class="feature-card bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="w-16 h-16 bg-coral bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <i class="fa-solid fa-palette text-2xl text-coral task-icon"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-center md:text-left">Listas con códigos de color</h3>
          <p class="text-gray-600 text-center md:text-left">Asigna colores divertidos a las categorías para organizar visualmente tus tareas</p>
        </div>
        
        <!-- Feature 3 -->
        <div class="feature-card bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="w-16 h-16 bg-yellow bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <i class="fa-solid fa-check text-2xl text-yellow task-icon"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-center md:text-left">Marcas de finalización instantáneas</h3>
          <p class="text-gray-600 text-center md:text-left">Celebra cuando marcas tus tareas como completadas con animaciones divertidas</p>
        </div>
        
        <!-- Additional features -->
        <div class="feature-card bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="w-16 h-16 bg-teal bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <i class="fa-solid fa-bell text-2xl text-teal task-icon"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-center md:text-left">Recordatorios personalizados</h3>
          <p class="text-gray-600 text-center md:text-left">Establece alertas para no olvidar tus tareas importantes</p>
        </div>
        
        <div class="feature-card bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="w-16 h-16 bg-coral bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <i class="fa-solid fa-users text-2xl text-coral task-icon"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-center md:text-left">Listas compartidas</h3>
          <p class="text-gray-600 text-center md:text-left">Colabora en listas de tareas con amigos, familia o compañeros de trabajo</p>
        </div>
        
        <div class="feature-card bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="w-16 h-16 bg-yellow bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <i class="fa-solid fa-chart-simple text-2xl text-yellow task-icon"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-center md:text-left">Estadísticas de productividad</h3>
          <p class="text-gray-600 text-center md:text-left">Visualiza tu progreso y mejora tus hábitos con reportes detallados</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section id="pricing" class="py-16">
    <div class="container mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Planes sencillos y transparentes</h2>
        <p class="text-gray-600 max-w-md mx-auto">Elige el plan que mejor se adapte a tus necesidades</p>
      </div>
      
      <div class="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <!-- Free Plan -->
        <div class="pricing-card free-plan flex-1 bg-white p-8 rounded-2xl shadow-md">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold">Plan Gratuito</h3>
            <div class="mt-4 mb-6">
              <span class="text-4xl font-bold">$0</span>
              <span class="text-gray-500"> / mes</span>
            </div>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-teal mr-2"></i> Hasta 3 listas de tareas
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-teal mr-2"></i> Funciones básicas
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-teal mr-2"></i> Marcado de tareas completadas
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-teal mr-2"></i> No requiere tarjeta de crédito
            </li>
          </ul>
          
          <a href="javascript:void(0)" class="block text-center px-6 py-3 bg-white border border-teal text-teal rounded-full hover:bg-teal hover:text-white transition-colors duration-300">
            Seleccionar plan
          </a>
        </div>
        
        <!-- Pro Plan -->
        <div class="pricing-card pro-plan flex-1 bg-white p-8 rounded-2xl shadow-md relative">
          <div class="absolute top-0 right-0 bg-coral text-white text-xs font-bold px-3 py-1 rounded-tr-lg rounded-bl-lg">
            POPULAR
          </div>
          
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold">Plan Pro</h3>
            <div class="mt-4 mb-6">
              <span class="text-4xl font-bold">$5</span>
              <span class="text-gray-500"> / mes</span>
            </div>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-coral mr-2"></i> Listas ilimitadas
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-coral mr-2"></i> Temas personalizados
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-coral mr-2"></i> Recordatorios avanzados
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-coral mr-2"></i> Soporte prioritario
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-coral mr-2"></i> Estadísticas completas
            </li>
          </ul>
          
          <a href="javascript:void(0)" class="block text-center px-6 py-3 bg-coral text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 shadow-md">
            Seleccionar plan
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
        <p class="text-gray-600 max-w-md mx-auto">Miles de personas ya disfrutan organizando sus tareas con TaskJoy</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-white p-6 rounded-2xl shadow-md">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-teal bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <span class="text-teal font-bold">ML</span>
            </div>
            <div>
              <h4 class="font-bold">María López</h4>
              <p class="text-sm text-gray-500">Diseñadora Gráfica</p>
            </div>
          </div>
          <p class="text-gray-600">"TaskJoy ha transformado mi forma de organizar proyectos. Me encanta lo fácil que es usar y los colores hacen que sea divertido marcar tareas como completadas."</p>
          <div class="flex mt-4">
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
          </div>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="bg-white p-6 rounded-2xl shadow-md">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-coral bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <span class="text-coral font-bold">CR</span>
            </div>
            <div>
              <h4 class="font-bold">Carlos Rodríguez</h4>
              <p class="text-sm text-gray-500">Desarrollador Web</p>
            </div>
          </div>
          <p class="text-gray-600">"Como desarrollador, necesito mantener mis tareas organizadas. TaskJoy me permite clasificar todos mis proyectos por colores y tener todo bajo control."</p>
          <div class="flex mt-4">
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
          </div>
        </div>
        
        <!-- Testimonial 3 -->
        <div class="bg-white p-6 rounded-2xl shadow-md">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-yellow bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <span class="text-yellow font-bold">AG</span>
            </div>
            <div>
              <h4 class="font-bold">Ana García</h4>
              <p class="text-sm text-gray-500">Estudiante</p>
            </div>
          </div>
          <p class="text-gray-600">"Desde que uso TaskJoy he mejorado mis calificaciones. Es muy sencillo organizar mis tareas de cada asignatura y los recordatorios son geniales."</p>
          <div class="flex mt-4">
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star text-yellow"></i>
            <i class="fas fa-star-half-alt text-yellow"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section id="contact" class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto bg-gradient-to-r from-teal to-blue-400 rounded-2xl p-10 text-center shadow-xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="absolute top-10 right-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
          <div class="absolute bottom-10 left-10 w-16 h-16 bg-white opacity-10 rounded-full"></div>
        </div>
        
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">¿Listo para impulsar tu productividad?</h2>
          <p class="text-white text-lg mb-8 max-w-lg mx-auto">Únete a miles de usuarios que ya disfrutan organizando sus tareas de manera efectiva y divertida con TaskJoy.</p>
          <a href="javascript:void(0)" class="inline-block px-8 py-4 bg-white text-teal font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg">
            Crear cuenta gratuita
          </a>
          <p class="text-white text-sm mt-4 opacity-90">No se requiere tarjeta de crédito</p>
        </div>
      </div>
    </div>
  </section>

  <FooterComponent />
</template>
