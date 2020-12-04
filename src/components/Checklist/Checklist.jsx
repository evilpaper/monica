import React from "react";
import Button from "components/Button"
import Badge from "components/Badge"
import "./styles.css";

export default function Checklist() {
    return (
        <div className="checklist">
            <h3>Title</h3>
            <h1>Checklist Name</h1>
            <div className="checklist__badge">
                <Badge amount={8}/>
            </div>
            <Button>Open</Button>
        </div>
    )
}
