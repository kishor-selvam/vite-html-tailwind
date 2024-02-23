import { getUser } from "./users/users";
const userNameEl = document.querySelector("#clickeduserName");

const userId = document.location.search.split("=")[1];
var numberRegex = /^\d+$/;

if (numberRegex.test(userId)) {
  const userData = await getUser(userId);
  userNameEl.textContent = `Hello ${userData.firstName}`;
} else {
  window.location.href = "/";
}
