import { defineStore } from "pinia";
import { ref } from "vue";

export const useTasksStore = defineStore("Tasks", () => {
    const list = ref([])

    return {
        list
    }
})