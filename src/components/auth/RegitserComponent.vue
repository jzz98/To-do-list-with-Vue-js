<script setup>
import { defineProps, defineEmits, reactive } from 'vue';

let props = defineProps({
    showingModalRegister: Boolean
})

let dataForm = reactive({
    email: "",
    password: ""
})

const emit = defineEmits(['update:showing-modal-register'])

const closeModal = () => {
    emit('update:showing-modal-register', false)
};

const createUser = () => {
    if (!dataForm.email || !dataForm.password) {
        alert('Campos vacíos');
        return;
    }

    const email = dataForm.email.toLowerCase();
    if (!(email.includes('@gmail.com') || email.includes('@hotmail.com'))) {
        alert('No es un email válido');
        return;
    }

    if (email.length <= 16) {
        alert('Email Invalido');
        return;
    }
    if (dataForm.password.length <= 8) {
        alert('Password invalido');
        return;
    }
    
    // let users = JSON.parse(localStorage.getItem("data_user"));

    const list = [{email: dataForm.email, password: dataForm.password}]


    localStorage.setItem("data_user", JSON.stringify(list));

}

</script>

<template>
  <div class="modal-overlay" :class="{active: props.showingModalRegister}">
    <div class="login-modal">
      <span class="modal-blob modal-blob-1"></span>
      <span class="modal-blob modal-blob-2"></span>

      <button class="close-modal" @click="closeModal">
        &times;
      </button>
      <h2 class="modal-title">Registrate</h2>

      <form @submit.prevent="createUser">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input type="text" v-model="dataForm.email" id="email" placeholder="tu@email.com" />
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input v-model="dataForm.password"
            type="password"
            id="password"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" class="login-btn">Ingresar</button>
      </form>

      <div class="modal-footer">
        ¿No tienes una cuenta? <a href="#">Regístrate</a><br />
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  </div>
</template>

<style>
/* Botón para abrir el modal (ejemplo) */
.open-modal-btn {
  background-color: #4dd0e1;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.open-modal-btn:hover {
  background-color: #3ab7c9;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

/* Estilos del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.login-modal {
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(20px);
  transition: transform 0.3s ease;
  z-index: 1;
  overflow: hidden;
}

.modal-overlay.active .login-modal {
  transform: translateY(0);
}

.login-modal::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, #4dd0e1, #ff8a65);
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;
}

.close-modal:hover {
  color: #333;
}

.modal-title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-weight: 600;
  font-size: 24px;
}

.input-group {
  margin-bottom: 20px;
  position: relative;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: 500;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #4dd0e1;
  outline: none;
  box-shadow: 0 0 0 3px rgba(77, 208, 225, 0.2);
}

.login-btn {
  width: 100%;
  padding: 14px;
  background-color: #4dd0e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.login-btn:hover {
  background-color: #3ab7c9;
  transform: translateY(-2px);
}

.modal-footer {
  text-align: center;
  margin-top: 20px;
  color: #666;
}

.modal-footer a {
  color: #4dd0e1;
  text-decoration: none;
  font-weight: 500;
}

.modal-footer a:hover {
  text-decoration: underline;
}

/* Blobs decorativos (como en tu diseño original) */
.modal-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;
  opacity: 0.4;
}

.modal-blob-1 {
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: rgba(77, 208, 225, 0.4);
}

.modal-blob-2 {
  bottom: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: rgba(255, 138, 101, 0.4);
}
</style>
