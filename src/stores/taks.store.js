import { defineStore } from "pinia";
import { ref } from "vue";

export const useTasksStore = defineStore("Tasks", () => {
    let list = ref([])
    let mini_tasks = ref([])

    return {
        list,
        mini_tasks
    }
})