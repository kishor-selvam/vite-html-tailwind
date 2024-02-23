const USERS_URL = "https://dummyjson.com/users";
const USER = "https://dummyjson.com/users/";

export const getAllUsers = async () => {
  try {
    const Res = await fetch(USERS_URL);
    const JsonData = await Res.json();
    return JsonData;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (id) => {
  try {
    const res = await fetch(USER + id);
    const JsonData = res.json();
    return JsonData;
  } catch (err) {
    console.log(err);
  }
};
