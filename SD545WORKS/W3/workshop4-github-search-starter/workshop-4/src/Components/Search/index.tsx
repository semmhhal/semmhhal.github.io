import { ChangeEvent, useState } from "react";
import axios from "axios";
import User from "../../types/users";

type Props = {
  onSetSearchResponse: (value: User[]) => void;
};

export default function Search(props: Props) {
  const { onSetSearchResponse } = props;
  const [keyword, setKeyword] = useState("");

  const search = async () => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${keyword}`
    );
    if (response.status === 200) {
      onSetSearchResponse(response.data.items);
    } else {
      //display error
    }
  };
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          value={keyword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
        />
        &nbsp;
        <button onClick={search}>Search</button>
      </div>
    </section>
  );
}
