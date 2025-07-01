<script setup>
import {onMounted, ref} from 'vue';
import { useTasksStore } from '@/stores/taks.store';

let newTask = ref("")
let taskStore = useTasksStore()

onMounted(() => {
    getItems()
})

function addMiniTask() {
  if (newTask.value.trim() === '') return

  let lista = JSON.parse(localStorage.getItem('mini-task')) || []
  lista.push({ content: newTask.value })

  localStorage.setItem('mini-task', JSON.stringify(lista))

  taskStore.mini_tasks = lista

  // Limpiar input
  newTask.value = ''
}

function getItems(){
    taskStore.mini_tasks = JSON.parse(localStorage.getItem("mini-task")) || [];
}
</script>

<template>
  <div class="md:w-1/2 mb-10 md:mb-0 z-10">
    <div class="relative max-w-md mx-auto">
      <div class="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-teal">
        <h3 class="text-xl font-bold mb-4 flex items-center">
          <span class="w-3 h-3 bg-teal rounded-full mr-2"></span>
          Mis Tareas
        </h3>

        <div class="space-y-3 mt-6">
          <div class="checklist-item checked">
            Preparar presentación proyecto
          </div>
          <div class="checklist-item checked">Reunión con cliente</div>
          <div class="checklist-item">Revisar correos pendientes</div>
          <div class="checklist-item" v-for="data in taskStore.mini_tasks" :key="data.content">{{ data.content }}</div>
        <div class="checklist-item" >{{ newTask }}</div>

        </div>

        <div class="mt-6 flex rounded-lg border border-gray-200">
          <input v-model="newTask"
            type="text"
            placeholder="Añadir nueva tarea..."
            class="flex-grow px-4 py-2 bg-transparent focus:outline-none"
            id="mini-task-input"
          />
          <button type="button" @click="addMiniTask" class="bg-teal text-white px-4 rounded-r-lg">
            +
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
