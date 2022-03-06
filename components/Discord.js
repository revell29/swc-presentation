import React from "react";

export default class Discord extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "0 5rem",
        }}
      >
        <p
          style={{ maxWidth: "1000px", fontSize: "28px", fontStyle: "italic" }}
        >
          "Rust uses a relatively unique memory management approach that
          incorporates the idea of memory ‘ownership’. Basically, Rust keeps
          track of who can read and write to memory. It knows when the program
          is using memory and immediately frees the memory once it is no longer
          needed. It enforces memory rules at compile-time, making it virtually
          impossible to have runtime memory bugs. You do not need to manually
          keep track of memory. The compiler takes care of it.”
        </p>
      </div>
    );
  }
}
