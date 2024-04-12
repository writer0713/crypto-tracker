import { Outlet } from 'react-router-dom';
import ThemeButton from './components/theme-button';

function Root() {
  return (
    <div className="relative w-full min-h-screen dark:bg-dark dark:text-white">
      <Outlet />
      <ThemeButton />
    </div>
  );
}

export default Root;
