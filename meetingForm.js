let fName, lName, userName, email, password, password2, phoneno, userInfo;

successStatus = {
  validFName: 0,
  validLName: 0,
  validUserName: 0,
  validEmail: 0,
  validPassword: 0,
  validPassword2: 0,
  validPhoneNo: 0,
};

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

validateForm = (event) => {
  event.preventDefault();
  checkName("firstname");
  checkName("lastname");
  checkUserName();
  checkPassword();
  confirmPassword();
  checkPhoneNo();
  checkEmail();
  if (statusChecker() === 7) {
    userInfo = {
      firstname: fName,
      lastname: lName,
      userName: userName.value.trim(),
      email: email.value.trim(),
      phone: phoneNo.value.trim(),
    };
    console.log(userInfo);
  }
};

checkName = (id) => {
  const name = document.getElementById(id);
  //console.log(id)
  const nameVal = name.value.trim();
  console.log(name);

  if (id === "firstname") {
    fName = nameVal;
  }
  if (id === "lastname") {
    lName = nameVal;
  }

  if (nameVal === "") {
    if (id === "firstname") {
      successStatus.validFName = 0;
      return error(name, "cannot be empty");
    } else if (id === "lastname") {
      successStatus.validLName = 0;
      return error(name, "cannot be empty");
    }
  } else if (id === "firstname" && nameVal.length < 3) {
    successStatus.validFName = 0;
    return error(name, " cannot be less than three");
  } else {
    if (id === "firstname") {
      successStatus.validFName = 1;
      return success(name);
    } else if (id === "lastname") {
      successStatus.validLName = 1;
      return success(name);
    }
  }
};

checkUserName = () => {
  userName = document.getElementById("username");
  const userNameVal = userName.value.trim();

  if (userNameVal === "") {
    successStatus.validUserName = 0;
    return error(userName, "user cannot be empty \n" + showSuggestions());
  } else if (userNameVal.length < 5) {
    successStatus.validUserName = 0;
    return error(userName, "Minimum 5 Charactters \n" + showSuggestions());
  } else {
    successStatus.validUserName = 1;
    return success(userName);
  }
};
checkPassword = () => {
  password = document.getElementById("password");
  let passwordVal = password.value.trim();
  let passwordRegex1 = /[a-z]/;
  let passwordRegex2 = /[A-Z]/;
  let passwordRegex3 = /[0-9]/;
  let passwordRegex4 = /[~`!@#$%^&*;:"<>,./?]/;
  let passwordRegex5 = /[-_+={}]/;
  let passwordRegex6 = /[(){}|]/;
  let passwordRegex7 = /[/]/;
  let passwordRegex8 = /[\[\]]/;

  if (
    passwordVal.length >= 8 &&
    passwordVal.length <= 14 &&
    passwordRegex1.test(passwordVal) &&
    passwordRegex2.test(passwordVal) &&
    passwordRegex3.test(passwordVal) &&
    (passwordRegex4.test(passwordVal) ||
      passwordRegex5.test(passwordVal) ||
      passwordRegex6.test(passwordVal) ||
      passwordRegex7.test(passwordVal) ||
      passwordRegex8.test(passwordVal))
  ) {
    successStatus.validPassword = 1;
    return success(password);
  } else {
    successStatus.validPassword = 0;
    return error(
      password,
      ' between 8-14 char \n min 1 [a-z],min 1 [A-Z]min 1[0-9] min 1(~`!@#$%^&*()-_+={}[]|;:"<>,./?)'
    );
  }
};

confirmPassword = () => {
  password2 = document.getElementById("password2");
  password2Val = password2.value.trim();

  if (password2Val === "") {
    successStatus.validPassword2 = 0;
    return error(password2, "Re-enter password");
  } else if (password2Val !== password.value) {
    successStatus.validPassword2 = 0;
    return error(password2, "Passwords donot match");
  } else {
    successStatus.validPassword2 = 1;
    return success(password2);
  }
};
checkPhoneNo = () => {
  phoneNo = document.getElementById("phoneno");
  const phoneNoVal = phoneNo.value.trim();
  const phoneRegex = /[0-9]{10}/;

  if (phoneRegex.test(phoneNoVal) && phoneNoVal.length === 10) {
    successStatus.validPhoneNo = 1;
    return success(phoneNo);
  } else {
    successStatus.validPhoneNo = 0;
    return error(phoneNo, "should contain only 10 digits");
  }
};

checkEmail = () => {
  email = document.getElementById("email");
  let emailVal = email.value.trim();

  const emailRegex = /([a-z0-9\.\-_]{5,25})@christuniversity.in$/;

  if (emailRegex.test(emailVal)) {
    successStatus.validEmail = 1;
    return success(email);
  } else {
    successStatus.validEmail = 0;
    return error(email, "invalid email");
  }
};

success = (input) => {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
};

error = (input, message) => {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  small.innerText = message;

  if (document.getElementById("username") === input) {
    formControl.className = "form-control error username";
    //console.log(formControl.className);
  } else if (document.getElementById("password") === input) {
    formControl.className = "form-control error password";
  } else {
    formControl.className = "form-control error";
  }
};

showSuggestions = () => {
  const fname = document.getElementById("firstname");

  const fnameVal = fname.value.trim();
  const lname = document.getElementById("lastname");

  const lnameVal = lname.value.trim();

  const userNameSuggArry = [
    fnameVal + lnameVal + randNoGen(),
    lnameVal + fnameVal + randNoGen(),
    randNoGen() + fnameVal + lnameVal,
  ];
  //console.log(userNameSuggArry);
  if (fnameVal.length !== 0 && lnameVal.length !== 0) {
    return (
      " Suggestion: " +
      userNameSuggArry[0] +
      "," +
      userNameSuggArry[1] +
      "," +
      userNameSuggArry[2]
    );
  } else {
    return "";
  }
};

randNoGen = () => {
  randNum = Math.floor(Math.random() * 100);
  return randNum;
};
statusChecker = () => {
  let sum = 0;
  const objectKeys = Object.keys(successStatus);
  objectKeys.forEach((key) => {
    sum += successStatus[key];
  });
  console.log(sum);
  return sum;
};
