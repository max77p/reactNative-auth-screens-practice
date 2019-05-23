

const validate = (val, rules, connectedValue) => {
  let isValid = true;
  for (let rule in rules) {
    console.log(rule)
    console.log(val)
    console.log(connectedValue);
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;
      case "minLength":
        console.log("min length")
        console.log(rules[rule]);
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case "equalTo":
        isValid = isValid && equalToValidator(val, connectedValue[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val
  );
};

const minLengthValidator = (val, minLength) => {
  return val.length >= minLength;
};
const equalToValidator = (val, checkValue) => {
  console.log(checkValue);
  console.log(val)
  return val === checkValue;
};

export default validate;
