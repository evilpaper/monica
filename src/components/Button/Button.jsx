import React from "react";
import "./styles.css";

export default function Button({label, children}) {
  return <button className="button">{children}</button>;
}
