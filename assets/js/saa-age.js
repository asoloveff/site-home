function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];  
  const index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)];
  return `${number} ${titles[index]}`;
}

function birthDateToAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

document.write(declOfNum(birthDateToAge("1987-03-16"), ['год', 'года', 'лет']));