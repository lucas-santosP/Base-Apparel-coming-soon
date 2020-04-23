const input_email = document.querySelector(".email-input");
const btn = document.querySelector(".email-btn");
const icon_btn = document.querySelector(".btn-icon");
const sucess_msg = document.querySelector(".sucess-text");
const erro_msg = document.querySelector(".erro-text");
const erro_icon = "assets/images/icon-error.svg";
const arrow_icon = "assets/images/icon-arrow.svg";
let time = null;

//== functions ==
const handleEmail = () => {
  if (validateEmail(input_email.value)) {
    HideError();
    return true;
  }
  ShowError();
  return false;
};
const showSucees = () => {
  ShowElement(sucess_msg);
  DebouceEvent(() => {
    HideElement(sucess_msg);
    input_email.value = "";
  }, 1500);
};
const ShowError = () => {
  ShowElement(erro_msg);
  ChangeBtnIcon(erro_icon);
  input_email.classList.add("email-input-erro");
};
const HideError = () => {
  HideElement(erro_msg);
  ChangeBtnIcon(arrow_icon);
  input_email.classList.remove("email-input-erro");
};
function DebouceEvent(fn, wait = 1000) {
  clearTimeout(time);
  time = setTimeout(() => {
    fn();
  }, wait);
}
const HideElement = (element) => {
  element.classList.add("hide-class");
};
const ShowElement = (element) => {
  element.classList.remove("hide-class");
};
const ChangeBtnIcon = (icon) => {
  icon_btn.src = icon;
};
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// == events ==
document.querySelector("body").onclick = (e) => {
  if (e.target != btn && e.target != icon_btn && e.target != input_email) {
    HideError();
  }
};
input_email.addEventListener("keydown", () => {
  DebouceEvent(handleEmail, 400);
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (handleEmail()) showSucees();
});
