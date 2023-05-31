const hours = prompt("Введіть кількість годин:");
  
if (isNaN(hours)) {
  alert("Введено некоректне значення. Будь ласка, введіть число годин.");
} else {
  
  const seconds = hours * 3600;
  
  alert(`У ${hours} годинах ${seconds} секунд.`);
}