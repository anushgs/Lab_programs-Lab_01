onlyChar = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return false;
  else return true;
};

onlyDigits = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return true;
  else return false;
};
