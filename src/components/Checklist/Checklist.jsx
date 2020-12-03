import React from "react";
import Button from "components/Button"
import "./styles.css";

export default function Checklist() {
    return (
        <div className="checklist">
            <h3>Title</h3>
            <h1>Checklist Name</h1>
            <Button>Open</Button>
        </div>
    )
}
