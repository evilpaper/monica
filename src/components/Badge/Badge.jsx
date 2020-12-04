import React from "react";
import "./styles.css";

export default function Badge(props) {
    const amount = props.amount;
    return (
        <div className="badge">
            <p className="number">{amount}</p>
        </div>
    )
}