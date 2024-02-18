import { defineStore } from "pinia";
import type { Theme } from "@/types/theme";
import type { ThemeSettings} from "@/types/mainColor";
import setThemeSettings from "@/helpers/setThemeSettings";

export const useStore = defineStore('store', {
  state() {
      return {
        themeState: 'dark' as Theme,
        themeSettings: {
            settings : {
                background_color: "var(--primary-black)",
                color: "var(--primary-light)",
                accent_color: "var(--accent-gold)"
            }
        } as ThemeSettings
      }
  },
  actions: {
    changeThemeState() {
        if(this.themeState === 'dark') {
            this.themeState = 'white'
            this.themeSettings = setThemeSettings(this.themeState)
        } else {
            this.themeState = 'dark'
            this.themeSettings = setThemeSettings(this.themeState)
        }
    }
  }
})