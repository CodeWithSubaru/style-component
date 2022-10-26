const getAll = (el) => document.querySelectorAll(el);

const getEl = (el) => document.querySelector(el);

function ruleVal(input) {
  return [`${input} cannot be empty`, `Looks like this is not email`];
}

const validEmail = (email) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

getEl("#handleSubmit").addEventListener("click", function (e) {
  e.preventDefault();

  let error;
  const arrErrMsg = getAll(".error-msg"); /* display error message */
  const arrInput = getAll(".inputValidation"); /* get inputs values */
  const arrIcon = getAll(".error-icon"); /* showing error icons */

  for (let i = 0; i < arrInput.length; i++) {
    /* validation if user not enter value */

    if (arrInput[i].value == "") {
      arrInput[i].classList.add("error"); /* Css Purpose */

      arrIcon[i].src = "../../images/icon-error.svg"; /* display icon error */

      arrErrMsg[i].textContent = ruleVal(
        arrInput[i].getAttribute("name")
      )[0]; /* display error */
      error = true;
    } else {
      /* Removing error (icon and message) */
      arrInput[i].classList.remove("error");
      arrIcon[i].src = "";
      arrErrMsg[i].textContent = "";
    }

    if (!validEmail(arrInput[2].value)) {
      /* display error for email */
      arrInput[2].classList.add("error"); /* Css Purpose */
      arrIcon[2].src = "../../images/icon-error.svg"; /* display icon error */
      arrErrMsg[2].textContent = ruleVal(
        arrInput[2].getAttribute("name")
      )[1]; /* Email error message */
      error = true;
    } else {
      /* Removing error (icon and message) */
      arrInput[2].classList.remove("error");
      arrIcon[2].src = "";
      arrErrMsg[2].textContent = "";
    }

    if (!error) {
      arrInput[i].classList.remove("error");
      arrIcon[i].src = "";
      arrErrMsg[i].textContent = "";
      arrInput[i].value = "";
      error = false;
      getEl(".success-msg").textContent = "Submitted Successfully";
    } else {
      getEl(".success-msg").textContent = "";
    }
  }
});
