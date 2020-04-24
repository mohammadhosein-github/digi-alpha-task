import React from "react";

export default function Album(props) {
  return (
    <div id="album" className="mb-5 pt-3">
      <h3 className="title mb-4">album</h3>
      <div className="row">
        {props.users.map((user) => {
          return (
            <div className="col-3">
              <div className="card-container">
                <p className="mb-0">{user.name}</p>
                <p>{user.username}</p>
                {props.photos.map((photo) => {
                  if (photo.id === user.id) {
                    return (
                      <img className="w-100" src={photo.url} alt="user_img" />
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
