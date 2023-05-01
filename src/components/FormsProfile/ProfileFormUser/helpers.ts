export const nameValidation = {
  pattern: {
    value: /^[A-ZА-ЯҐЄІЇ][a-zA-ZА-Яа-яҐєії]*$/,
    message: 'Перша буква має бути великою. Цифри та спеціальні символи не допускаються'
  },
  minLength: {
    value: 3,
    message: 'Мінімальна кількість символів - 3'
  },
  maxLength: {
    value: 255,
    message: 'Максимальна кількість символів - 255'
  }
};

export const phoneValidation = {
  pattern: {
    value: /^\+380\d{9}$/,
    message: 'Введіть дійсний номер телефону у форматі: +380XXXXXXXXX'
  }
};

export const emailValidation = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Невірний формат пошти. Приклад: Standart@gmail.com '
  }
};

export const streetValidation = {
  pattern: {
    value: /^[A-ZА-ЯҐЄІЇ0-9]+-*[a-zA-ZА-Яа-яҐєії0-9]+$/,
    message: 'Перша буква має бути великою. Спеціальні символи не допускаються'
  },
  minLength: {
    value: 2,
    message: 'Мінімальна кількість символів - 2'
  }
};

export const numberValidation = {
  pattern: {
    value: /^[0-9]\/*[0-9]+$/,
    message: 'Мають бути лише цифри'
  }
};
