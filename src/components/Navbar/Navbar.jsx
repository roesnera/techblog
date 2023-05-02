import { useState } from "react";
import "./Navbar.css";

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
        <a className="nav-item" href="/">Home</a>
        <a className="nav-item" href="/about">About</a>
        <a className="nav-item" href="/articles">Articles</a>
        <form className="search nav-item" onSubmit={onFormSubmit}>
            <div className="search-svg">Search svg to go here</div>
            <input type="text" value={searchText} onChange={onSearchChange}/>
        </form>
    </nav>
}