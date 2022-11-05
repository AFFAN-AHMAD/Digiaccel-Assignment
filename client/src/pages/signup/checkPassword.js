let password = "Affan@123";
let alphaLower = "abcdefghijklmnopqrstuvwxvz";
let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "1234567890";
let sym = "!@#$%^&*";
let flag = false;

export const checkPassword = (password) => {
  if (password.length < 8) {
    return { flag, message: "alteast 8 characters required" };
  }
  for (let i = 0; i < alphaLower.length; i++) {
    let result = password.includes(alphaLower[i]);
    if (result == true) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }

  if (flag == false) {
    return { flag, message: "use atleast 1 Lower Case" };
  }

  for (let i = 0; i < alphaLower.length; i++) {
    let result = password.includes(alphaUpper[i]);
    if (result == true) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  if (flag == false) {
    return { flag, message: "use atleast one Upper Case" };
  }

  for (let i = 0; i < num.length; i++) {
    let result = password.includes(num[i]);
    if (result == true) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }

  if (flag == false) {
    return { flag, message: "use atleast 1 Number" };
  }

  for (let i = 0; i < sym.length; i++) {
    let result = password.includes(sym[i]);
    if (result == true) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  if (flag == false) {
    return { flag, message: "use atleast 1 Special Character" };
  }
  return { flag, message: "password is correct" };
};
