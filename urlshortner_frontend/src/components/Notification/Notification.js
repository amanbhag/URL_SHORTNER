import React from "react";

export default function Notification() {
  return (
    <div
      className="alert alert-info alert-dismissible fade show mb-0"
      role="alert"
    >
      if you have any inquiries or require further assistance, please do not
      hesitate to contact me at{" "}
      <a href="mailto:amanbhagtani@gmail.com">amanbhagtani@gmail.com</a>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
