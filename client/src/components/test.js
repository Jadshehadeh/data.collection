import React from "react";
import { signOut } from "../auth/index";

export default function Test({ history }) {
  return (
    <div>
      <button
        onClick={() => {
          signOut(() => {
            history.push("/signIn");
          });
        }}
      >
        signOut
      </button>
    </div>
  );
}
