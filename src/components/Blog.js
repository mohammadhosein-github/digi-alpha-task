import React from "react";

export default function Blog(props) {
  return (
    <div id="blog" className="mb-5 pt-3">
      <h3 className="title mb-4">Blog</h3>
      <div className="row">
        {props.posts.length !== 0 ? (
          props.posts.map((post) => (
            <div className="col-4 " key={post.id}>
              <div className="card-container d-flex">
                <p>Title: {post.title}</p>
                {props.users.map(
                  (user) =>
                    post.userId === user.id && (
                      <p key={user.id}>Writer: {user.name}</p>
                    )
                )}
              </div>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}
