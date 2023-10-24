interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: "admin" | "user" | superAdmin;
}

type superAdmin = "super-admin";

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "super-admin",
};

const getRole = (user:User)=>{
    return user.role;
}

console.log(getRole(defaultUser))