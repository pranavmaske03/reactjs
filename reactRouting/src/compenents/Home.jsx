import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Inside Home component</h1>
            <nav>
                <Link to='/batch-list'>Batch lists</Link> 
                <br/>
                <Link to='/batch-detail'>Batch Details</Link>
            </nav>
        </>
    )
}