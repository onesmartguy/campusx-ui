const DEFAULT_ROLE_MAP = {
  1: "Campus System Admin",
  2: "Campus Service Admin",
  3: "School Corp Admin",
  4: "",
  5: "Department Admin",
  6: "",
  7: "Student",
  8: "",
  9: "",
};

// export const IsCampusXAdmin = (user) => {
//   // return sessionStorage["myDefaultRole"] == "1";
//   return;
// };

// export const IsCollegeAdmin = (user) => {
//   // return sessionStorage["myDefaultRole"] == "1";
//   return;
// };

// export const IsDepartmentAdmin = (user) => {
//   // return sessionStorage["myDefaultRole"] == "1";
//   return;
// };

// export const IsDepartmentAdmin = (user) => {
//   // return sessionStorage["myDefaultRole"] == "1";
//   return;
// };

export const GetDefaultRole = (user) => {
  let defaultRoleName = "";
  const role = user.defaultRole ? user.defaultRole : "";

  if (role !== "") {
    defaultRoleName = DEFAULT_ROLE_MAP[role];
  }
  return defaultRoleName;
};
