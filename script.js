const form = document.querySelector("form");

if (localStorage.formdata) {
  const formData = JSON.parse(localStorage.formdata);
  for (let data in formData) {
    form[data].value = formData[data];
  }
}
const eventFun = (e) => {
  console.log("submitted");
  e.preventDefault();
  const name = form.name.value;
  const phone = form.phone.value;
  const reg = form.reg.value;
  const dob = form.dob.value ? form.dob.value : "";
  const email = form.email.value;
  const branch = form.branch.value;
  const domain = form.domain.value;
  const github = form.github.value;
  const insta = form.insta.value;
  const twitter = form.twitter.value;
  const formdata = {
    name,
    domain,
    phone,
    reg,
    dob,
    email,
    branch,
    github,
    insta,
    twitter,
  };
  localStorage.setItem("formdata", JSON.stringify(formdata));
};

document.querySelector("#phone").addEventListener("keyup", function () {
  txt = this.value;
  if (txt.length == 3 || txt.length == 7) this.value = this.value + " ";
});

form.addEventListener("submit", eventFun);
