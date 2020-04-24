import React from "react";

export default function MainPage(props) {
  const last_post = props.posts[props.posts.length - 1];
  const last_photo = props.photos[props.photos.length - 1];

  return (
    <div id="main-page" className="row mb-5 pt-3">
      <div className="col-sm-5">
        <div className="card-container p-3 mb-4">
          <h3 className="mb-4 title">last post</h3>
          {props.posts.length !== 0 ? (
            <div>
              <span className="post-title">{last_post.title}</span>
              <p className="post-body">{last_post.body}</p>
              <span className="user-id">user id:{last_post.userId}</span>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="col-sm-7">
        <div className="card-container p-3">
          <h3 className="mb-4 title">last photo</h3>
          {props.photos.length !== 0 ? (
            <div>
              <img className="w-100" src={last_photo.url} alt="last_photo" />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
