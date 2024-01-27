function hoursArray() {
  return Array.from({ length: 99 }, (_, index) => index + 1);
}

function minutAndSecondsArray() {
  return Array.from({ length: 59 }, (_, index) => index + 1);
}

export const hourArray = hoursArray();
export const minAndSecArray = minutAndSecondsArray();
