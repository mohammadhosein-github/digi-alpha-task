import React, { useState } from "react";
import axios from "axios";

export default function Users(props) {
  const [user_info, set_user_info] = useState(null);

  const handle_user = (target_user) => {
    set_user_info(target_user);

    const url = "https://jsonplaceholder.typicode.com/posts?userId=";
    axios({
      url: `https://jsonplaceholder.typicode.com/posts?userId=1`,
      method: "GET",
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div id="users" className="mb-5 pt-3">
      <h3 className="title">users</h3>
      <div className="row">
        {props.users.map((user) => (
          <div className="col-sm-3" key={user.id}>
            <div className="card-container">
              <button className="btn w-100" onClick={() => handle_user(user)}>
                {user.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {user_info !== null && <h5 className="text-capitalize">user info</h5>}
      {user_info !== null &&
        Object.keys(user_info).map((item) => {
          if (item !== "company" && item !== "address") {
            return (
              <div key={item}>
                {item}: <span>{user_info[item]}</span>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
