import { getAllUsers } from "./users/users";
const userPlaceholderEl = document.querySelector("#users-placeholder");

const allUsers = await getAllUsers();

allUsers.users.map((user) => {
  userPlaceholderEl.innerHTML += `
  <a href="/userDetails.html?user=${user.id}" class="block bg-cyan-100 rounded  px-5 py-3 hover:bg-cyan-200">
   <h4 class="font-semibold">${user.firstName} - ${user.age}</h4>
    <div>${user.email}</div>
   </a>`;

});
