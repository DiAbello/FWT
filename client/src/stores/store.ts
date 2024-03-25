import { defineStore } from "pinia";
import type {Painting} from "@/types/Painting";
import $api from "@/API/http";
import type {Author} from "@/types/Author";
import type {Location} from "@/types/Location";

export const useStore = defineStore('store', {
  state() {
      return {
            paintings: [] as Painting[],
            searchedPaintings: [] as Painting[]
      }
  },
  actions: {
        async setPaintings() {
            const paintings = await $api.get<Painting[]>('/paintings?_limit=6', )
            const authors = await $api.get<Author[]>('/authors')
            const locations = await $api.get<Location[]>('/locations')
            try {
                paintings.data.forEach((painting, index) => {
                    for(let i = 0; authors.data.length > i; i += 1) {
                        if(painting.authorId === authors.data[i].id) {
                            const modPainting = painting
                            modPainting.author = authors.data[i].name
                        }
                    }
                    for(let i = 0; locations.data.length > i; i += 1) {
                        if(painting.authorId === locations.data[i].id) {
                            const modPainting = painting
                            modPainting.location = locations.data[index].location
                        }
                    }
                })
                this.paintings = paintings.data
            } catch (error) {
                console.log(error)
            }
        },
        searchPaintings(setFilteredPaintings: Painting[]) {
            console.log(setFilteredPaintings)
            this.paintings = setFilteredPaintings
        }
  }
})