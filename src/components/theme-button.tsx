import { useThemeStore } from '../stores/theme.store';

export default function ThemeButton() {
  const { isDark, setIsDark } = useThemeStore();

  return (
    <div
      onClick={setIsDark}
      className="fixed flex items-center justify-center p-5 text-sm font-semibold text-white duration-200 rounded-full shadow-xl cursor-pointer size-12 right-5 bottom-5 bg-zinc-800 dark:bg-slate-300 dark:text-black hover:bg-pink-400 dark:hover:text-white"
    >
      {isDark ? 'Light' : 'Dark'}
    </div>
  );
}
