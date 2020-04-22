const erro_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="#F96464"/><path fill="#FFF" fill-rule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"/></g></svg>';
const arrow_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/></svg>';

const input_email = document.querySelector(".email-input");
const btn = document.querySelector(".email-btn");
const erro_msg = document.querySelector(".erro-text");
btn.innerHTML = arrow_icon;
let time = null;

// == events ==
document.querySelector("body").onclick = (e) => {
  if (
    e.target != document.querySelector(".email-btn") &&
    e.target != document.querySelector(".email-input")
  ) {
    HideError();
  }
};
input_email.addEventListener("keydown", () => {
  DebouceEvent(handleEmail, 400);
});

input_email.addEventListener("onfocusout", () => {
  DebouceEvent(handleEmail, 400);
});

btn.addEventListener("click", () => {
  if (handleEmail()) showSucees();
});

//== functions ==
function handleEmail() {
  if (validateEmail(input_email.value)) {
    HideError();
    return true;
  } else {
    ShowError();
    return false;
  }
}
function showSucees() {
  erro_msg.textContent = "Sucess!!";
  DebouceEvent(() => {
    erro_msg.textContent = "";
  }, 1500);
}
function ShowError() {
  erro_msg.textContent = "Please provind a valid email";
  btn.innerHTML = erro_icon;
  input_email.classList.add("email-input-erro");
}
function HideError() {
  erro_msg.textContent = "";
  btn.innerHTML = arrow_icon;
  input_email.classList.remove("email-input-erro");
}
function DebouceEvent(fn, wait = 1000) {
  clearTimeout(time);
  time = setTimeout(() => {
    fn();
  }, wait);
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
