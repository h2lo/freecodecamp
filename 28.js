function getTimeFromMinutes(time) {
  if (typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
    return "Ошибка, проверьте данные";
  }

  let hour = Math.floor(time / 60);

  let minute = time % 60;

  if (hour >= 2 && hour <= 4) {
    return `"Это ${hour} часа и ${minute} минут"`
  } else if (hour === 0 || hour >= 5) {
    return `"Это ${hour} часов и ${minute} минут"`
  } else if (hour === 1)
    return `"Это ${hour} час и ${minute} минут"`;
}