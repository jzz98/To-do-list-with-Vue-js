<script setup>


const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.add("opacity-0", "pointer-events-none");
  modal.querySelector(".modal-container").classList.remove("scale-100");
  modal.querySelector(".modal-container").classList.add("scale-95");
};

function Cmodal() {
    closeModal('task-modal');
    closeModal('delete-modal');
}

function addTask(){
    const title = document.getElementById('task-title')
    const due = document.getElementById("task-due-date")
    const priority = document.getElementById("task-priority")
    const status = document.getElementById('task-status')
  
    let lista = JSON.parse(localStorage.getItem("clave")) || [];

    lista.push({ title: title.value, time: due.value , priority: priority.value , status: status.value});

    localStorage.setItem("clave", JSON.stringify(lista));
    Cmodal()
}

</script>

<template>
  <!-- Task Modal -->
  <div
    id="task-modal"
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
          <p class="text-2xl font-bold" id="modal-title">Add New Task</p>
          <div class="modal-close cursor-pointer z-50">
            <i class="fas fa-times"></i>
          </div>
        </div>

        <!-- Modal Body -->
        <form id="task-form">
          <input type="hidden" id="task-id" />

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="task-title"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-title"
              type="text"
              placeholder="Task title"
              required
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="task-due-date"
            >
              Due Date
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-due-date"
              type="text"
              placeholder="Select due date"
              required
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="task-priority"
            >
              Priority
            </label>
            <select
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-priority"
              required
            >
              <option value="">Select priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="task-status"
            >
              Status
            </label>
            <select
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-status"
              required
            >
              <option value="">Select status</option>
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div class="flex justify-end pt-2 gap-2">
            <button @click="Cmodal"
              type="button"
              class="modal-close px-4 bg-gray-200 p-3 rounded-lg text-gray-500 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button @click="addTask"
              type="submit"
              class="px-4 bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
