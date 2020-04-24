import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Users, MainPage, Album, Blog } from "./components";

function App() {
  const [users, set_users] = useState([]);
  const [posts, set_posts] = useState([]);
  const [photos, set_photos] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com";
    const target_apis = ["users", "posts", "photos"];

    target_apis.map((item) => {
      axios({
        url: `${url}/${item}`,
        method: "GET",
      })
        .then((res) => {
          item === "users" && set_users(res.data);
          item === "posts" && set_posts(res.data);
          item === "photos" && set_photos(res.data);
        })
        .catch((error) => console.log(error));

      return null;
    });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="col-md-10 m-auto pt-4">
        <MainPage posts={posts} photos={photos} />

        <Album users={users} photos={photos} />

        <Blog posts={posts} users={users} />

        <Users users={users} />
      </div>
    </div>
  );
}

export default App;
