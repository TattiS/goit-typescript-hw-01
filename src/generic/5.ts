export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}
type UserRoleDetails = Record<UserRole, string>;

const RoleDescription: UserRoleDetails = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
