import "./index.css";
import User from "../../types/users";
type Props = {
  searchResponse: User[];
};
export default function List(props: Props) {
  const { searchResponse } = props;
  return (
    <div className="row">
      {searchResponse.map((user) => (
        <div className="card" key={user.id}>
          <a href={user.html_url} target="_blank">
            <img src={user.avatar_url} style={{ width: "100px" }} />
          </a>
          <p className="card-text">{user.login}</p>
        </div>
      ))}
    </div>
  );
}
