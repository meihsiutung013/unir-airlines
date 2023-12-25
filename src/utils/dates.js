export const isBefore = (date1, date2) => {
  let d1 = new Date(date1);
  d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  let d2 = new Date(date2);
  d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  return d1.getTime() < d2.getTime();
}

export const isEqual = (date1, date2) => {
  let d1 = new Date(date1);
  d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  let d2 = new Date(date2);
  d2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  return d1.getTime() === d2.getTime();
}

export const isBeforeToday = (date1) => {
  let d1 = new Date(date1);
  d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  let today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return d1.getTime() < today.getTime();
}

export const addDays = (date1, days) => {
  let d1 = new Date(date1);
  d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  d1.setDate(d1.getDate() + days);
  return d1;
}

export const formatDate = (date) => {
  if (date) {
    let weekday = date.toLocaleDateString('es-ES', { weekday: 'short' });
    weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    let day = date.toLocaleDateString('es-ES', { day: 'numeric' });
    let month = date.toLocaleDateString('es-ES', { month: 'numeric' });
    return `${weekday} ${day}/${month}`;
  }
  return '';
}

export const formatTime = (date) => {
  if (date) {
    date = new Date(date);
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  return '';
}