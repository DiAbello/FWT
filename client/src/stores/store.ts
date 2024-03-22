import { defineStore } from "pinia";
import type {Painting} from "@/types/Painting";
import $api from "@/API/http";

export const useStore = defineStore('store', {
  state() {
      return {
            paintings: [] as Painting[]
      }
  },
  actions: {
        async setPaintings() {
            const paintings = await $api.get('/paintings?_limit=6', )
            try {
                this.paintings = paintings.data
            } catch (error) {
                console.log(error)
            }
        }
  }
})