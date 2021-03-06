export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

const delete_cookie = function (name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export function getUser() {
  const user = localStorage.getItem("user");
  return user === "undefined" ? null : JSON.parse(user);
}

export function Signout() {
  document.cookie = "jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  delete_cookie("jwt");
  localStorage.removeItem("user");
}
