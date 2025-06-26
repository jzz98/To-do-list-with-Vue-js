<template>
  <NavBarComponent />
<div class="todo-container">
  <h1 class="todo-title">My Tasks</h1>
  
  <div class="todo-table-container">
    <table class="todo-table">
      <thead>
        <tr>
          <th class="table-header">Task</th>
          <th class="table-header">Time</th>
          <th class="table-header">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in list" :key="data.id" class="table-row">
          <td class="table-data task-name">{{ data.name }}</td>
          <td class="table-data task-time">{{ data.time }}</td>
          <td class="table-data">
            <button @click="removeItem(data.name, data.time)" class="check-button">✓</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <form class="todo-form">
    <div class="form-group">
      <label for="name" class="form-label">Task Name</label>
      <input type="text" class="form-input" id="name" placeholder="What needs to be done?">
    </div>
    <div class="form-group">
      <label for="time" class="form-label">Time</label>
      <input type="text" class="form-input" id="time" placeholder="How long will it take?">
    </div>
    <button type="button" @click="additem()" class="submit-button">Add Task</button>
  </form>
</div>

</template>

<script>
import NavBarComponent from './components/NavBarCompoent.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent
  },
  data(){
    return{
      list: [
        
      ]
    }
  },
  mounted() {
    this.getItems()
  },
  methods: {
    additem() {
      let input1 = document.getElementById('name')
      let input2 = document.getElementById('time')

      // 1. Obtener la lista existente
      let lista = JSON.parse(localStorage.getItem('clave')) || []

      // 2. Agregar el nuevo objeto
      lista.push({ name: input1.value, time: input2.value })

      // 3. Guardar la lista actualizada
      localStorage.setItem('clave', JSON.stringify(lista))

      // 4. Actualizar la lista en Vue
      this.list = lista
      input1.value = ""
      input2.value = ""
    },

    removeItem(name, time) {
      alert('La tarea se completó')

      // 1. Eliminar del array local
      const index = this.list.findIndex(i => i.name === name && i.time === time)
      if (index !== -1) {
        this.list.splice(index, 1)
      }

      // 2. Guardar la lista actualizada en localStorage
      localStorage.setItem('clave', JSON.stringify(this.list))
    },

    getItems() {
      // Obtener lista completa
      this.list = JSON.parse(localStorage.getItem('clave')) || []
    }
  }
  ,

}
</script>

<style>
.form-list{
  margin-left: 70pc;
}

</style>