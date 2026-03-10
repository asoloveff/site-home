function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];  
  const index = (number % 100 > 4 && number % 100 < 20)
    ? 2
    : cases[Math.min(number % 10, 5)];
  return `${number} ${titles[index]}`;
}

function birthDateToAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();

  if (today.getDate() < birth.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // если меньше года — возвращаем месяцы
  if (years < 1) {
    return declOfNum(months, ['месяц', 'месяца', 'месяцев']);
  }

  // иначе — годы
  return declOfNum(years, ['год', 'года', 'лет']);
}

document.write(birthDateToAge("2025-10-21"));