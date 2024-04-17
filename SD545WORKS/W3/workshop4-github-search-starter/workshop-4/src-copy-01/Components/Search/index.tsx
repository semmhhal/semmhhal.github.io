import React, { ChangeEvent, useState, useRef } from "react";
import axios from "axios";
import User from "../../types/users";
import searchResponse from "../../types/search-response";
import PubSub from "pubsub-js";
export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);

  const search = async () => {
    PubSub.publish("sd545", {
      isFirst: false,
      isLoading: true,
      isError: false,
      users: [],
    });
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${inputRef.current!.value}`
      );
      if (response.status === 200) {
        PubSub.publish("sd545", {
          isFirst: false,
          isLoading: false,
          isError: false,
          users: response.data.items,
        });
      } else {
        PubSub.publish("sd545", {
          isFirst: false,
          isLoading: false,
          isError: true,
          users: [],
        });
      }
    } catch (e) {
      PubSub.publish("sd545", {
        isFirst: false,
        isLoading: false,
        isError: true,
        users: [],
      });
    }
  };
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          ref={inputRef}
        />
        &nbsp;
        <button onClick={search}>Search</button>
      </div>
    </section>
  );
}
