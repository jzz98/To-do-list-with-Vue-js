<script setup>
import TaskModal from "@/components/TaskModal.vue";
import NavBarComponent from "../components/NavBarCompoent.vue";
import { useTasksStore } from "@/stores/taks.store";
import { onMounted } from "vue";
const taskStore = useTasksStore() 

onMounted(() => {
  getItems();
});

// function removeItem(name, time) {
//   alert("La tarea se completó");

//   // 1. Eliminar del array local
//   const index = this.list.findIndex((i) => i.name === name && i.time === time);
//   if (index !== -1) {
//     list.splice(index, 1);
//   }

//   // 2. Guardar la lista actualizada en localStorage
//   localStorage.setItem("clave", JSON.stringify(this.list));
// }

function getItems() {
  // Obtener lista completa
  taskStore.list = JSON.parse(localStorage.getItem("clave")) || [];
}

const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.querySelector(".modal-container").classList.remove("scale-95");
  modal.querySelector(".modal-container").classList.add("scale-100");
};

function ShowModal() {
  document.getElementById("modal-title").textContent = "Add New Task";
  document.getElementById("task-form").reset();
  document.getElementById("task-id").value = "";
  openModal("task-modal");
}

</script>

<template>
  <NavBarComponent />

  <div class="container mx-auto px-4 py-8">
    <!-- Header -->
    <header class="bg-white shadow-md rounded-lg p-6 mb-8">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-800">
          Task Manager
        </h1>
        <button @click="ShowModal"
          id="add-task-btn"
          class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
        >
          <i class="fas fa-plus mr-2"></i>
          <span class="hidden sm:inline">Add Task</span>
        </button>
      </div>
    </header>

    <!-- Loading State -->
    <div id="loading-state" class="hidden">
      <div class="flex flex-col items-center justify-center py-12">
        <div class="loading-spinner mb-4"></div>
        <p class="text-gray-600">Loading tasks...</p>
      </div>
    </div>

    <!-- Error State -->
    <div id="error-state" class="hidden">
      <div
        class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded"
        role="alert"
      >
        <p class="font-bold">Error</p>
        <p>There was a problem loading your tasks. Please try again later.</p>
      </div>
    </div>

    <!-- Empty State -->
    <div id="empty-state" class="hidden">
      <div class="bg-white rounded-lg shadow-md p-8 text-center">
        <i class="fas fa-tasks text-gray-400 text-5xl mb-4"></i>
        <h2 class="text-xl font-semibold text-gray-700 mb-2">No tasks yet</h2>
        <p class="text-gray-500 mb-6">
          Click the "Add Task" button to create your first task.
        </p>
        <button @click="ShowModal"
          class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          <i class="fas fa-plus mr-2"></i> Create Task
        </button>
      </div>
    </div>

    <!-- Task List -->
    <div id="task-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Aplicar v-for en cada tarjeta individual -->
      <div 
        v-for="data in taskStore.list" 
        :key="data" 
        class="task-card bg-white rounded-lg shadow-md p-5"
        :class="{
          'priority-low': data.priority === 'low',
          'priority-medium': data.priority === 'medium',
          'priority-high': data.priority === 'high'
        }"
      >
        <div class="flex justify-between mb-2">
          <span class="text-xs font-semibold px-2 py-1 rounded bg-orange-100 text-orange-700">{{ data.priority }}</span>
          <span class="text-xs font-semibold px-2 py-1 rounded bg-purple-100 text-purple-700">{{ data.status }}</span>
        </div>
        <h3 class="font-semibold text-xl text-gray-800 mb-2">{{ data.title }}</h3>
        <p class="text-sm text-gray-600 mb-4"><i class="far fa-calendar mr-2"></i> Due: {{ data.time }}</p>
        <div class="flex justify-end space-x-2">
          <button class="edit-task-btn p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete-task-btn p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Footer for mobile -->
    <footer
      class="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 md:hidden"
    >
      <div class="flex justify-around">
        <button class="text-blue-500">
          <i class="fas fa-tasks"></i>
          <span class="text-xs block">Tasks</span>
        </button>
        <button class="text-gray-500">
          <i class="fas fa-calendar"></i>
          <span class="text-xs block">Calendar</span>
        </button>
        <button class="text-gray-500">
          <i class="fas fa-chart-pie"></i>
          <span class="text-xs block">Reports</span>
        </button>
        <button class="text-gray-500">
          <i class="fas fa-cog"></i>
          <span class="text-xs block">Settings</span>
        </button>
      </div>
    </footer>
  </div>

  <TaskModal />

  <!-- Delete Confirmation Modal -->
  <div
    id="delete-modal"
    class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center z-50"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>

    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto transform scale-95 transition-all"
    >
      <div class="modal-content py-4 text-left px-6">
        <!-- Modal Header -->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold text-red-600">Delete Task</p>
          <div class="modal-close cursor-pointer z-50">
            <i class="fas fa-times"></i>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="mb-6">
          <p class="text-gray-700 mb-4">
            Are you sure you want to delete this task? This action cannot be
            undone.
          </p>
          <p id="delete-task-name" class="font-semibold"></p>
        </div>

        <div class="flex justify-end pt-2 gap-2">
          <button
            class="modal-close px-4 bg-gray-200 p-3 rounded-lg text-gray-500 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            id="confirm-delete"
            class="px-4 bg-red-500 p-3 rounded-lg text-white hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast Notification -->
  <div
    class="toast bg-green-500 text-white p-4 rounded-lg shadow-lg"
    id="toast"
  >
    <div class="flex items-center">
      <i class="fas fa-check-circle mr-2"></i>
      <span id="toast-message">Task saved successfully!</span>
    </div>
  </div>

</template>

<style>
.form-list {
  margin-left: 70pc;
}

.task-card {
  transition: all 0.3s ease;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.priority-high {
  background-color: #fee2e2;
  border-left: 4px solid #ef4444;
}

.priority-medium {
  background-color: #fef3c7;
  border-left: 4px solid #f59e0b;
}

.priority-low {
  background-color: #d1fae5;
  border-left: 4px solid #10b981;
}

.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  transition: all 0.3s ease;
  transform: translateY(100px);
  opacity: 0;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 600px) {
  .task-actions {
    flex-direction: column;
  }
}

.loading-spinner {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.modal {
  transition: opacity 0.25s ease;
}

.modal-container {
  transition: all 0.3s ease;
}
</style>
