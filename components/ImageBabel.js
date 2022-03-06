import React from "react";

export default class ImageBabel extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dc59d299-5281-4e1d-9ae4-8ebe85004a4d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220306T215125Z&X-Amz-Expires=86400&X-Amz-Signature=dede96195e44f711c826805817f308200805d81b58b7878059029a11717fc4f0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
          alt="placeholder"
          style={{
            height: "350px",
          }}
        />
      </div>
    );
  }
}
