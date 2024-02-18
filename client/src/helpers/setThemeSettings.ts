import type { Theme } from "@/types/theme";
import type { Settings } from "@/types/mainColor";

export default function setThemeSettings(theme: Theme) {
    let settings: Settings;
    if(theme === 'dark') {
        settings = {
            background_color: "var(--primary-black)",
            color: "var(--primary-light)",
            accent_color: "var(--accent-gold)"
        }
    } else {
        settings = {
            background_color: "var(--primary-white)",
            color: "var(--primary-black)",
            accent_color: "var(--accent-red)"
        }
    }
    return {
        settings
    }
}