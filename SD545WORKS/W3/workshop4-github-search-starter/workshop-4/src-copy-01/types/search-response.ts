import User from "./users";

export default interface searchResponse {
  isFirst: boolean;
  isLoading: boolean;
  isError: boolean;
  users: User[];
}
