import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeSelector = () => {

  const { theme, toggleTheme } = useTheme();

  const modes = { 
    light: {title: 'modo oscuro', buttonClass: 'btn-outline-primary', iconClass: 'fa-sun'}, 
    dark: {title: 'modo claro', buttonClass: 'btn-dark', iconClass: 'fa-moon'}
  };

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <button className={`btn ${modes[theme].buttonClass} btn-theme`} title={modes[theme].title} onClick={toggleTheme}>
      <i className={`fa-solid ${modes[theme].iconClass}`}></i>
    </button>
  );
}