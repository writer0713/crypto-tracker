import { create } from 'zustand';

interface ThemeStore {
  isDark: boolean;
  setIsDark: () => void;
}
export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: true,
  setIsDark: () => {
    set((prev) => ({ isDark: !prev.isDark }));
    document.querySelector('body')?.classList.toggle('dark');
  },
}));
