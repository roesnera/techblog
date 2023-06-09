'use client';
import { useState } from "react";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
    const [searchText, setSearchText] = useState("");

    const onSearchChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        // just some filler functionality, will actually make call to the server
        console.log(`Execute search for ${searchText}`);
        setSearchText("");
    }

    return <nav>
        <div className="logo nav-item">Logo Here</div>
        <Link className="nav-item" href="/">Home</Link>
        <Link className="nav-item" href="/about">About</Link>
        <Link className="nav-item" href="/articles">Articles</Link>
        <form className="search nav-item" onSubmit={onFormSubmit}>
            <div className="search-svg">Search svg to go here</div>
            <input type="text" value={searchText} onChange={onSearchChange}/>
        </form>
    </nav>
}