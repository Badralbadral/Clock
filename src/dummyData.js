function hoursArray() {
  return Array.from({ length: 100 }, (_, index) => index);
}

function minutAndSecondsArray() {
  return Array.from({ length: 60 }, (_, index) => index);
}

export const hourArray = hoursArray();
export const minAndSecArray = minutAndSecondsArray();
