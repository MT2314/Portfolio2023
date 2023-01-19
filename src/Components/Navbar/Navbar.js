import React, {useEffect, useState} from "react";

import "./assets/NavbarStyles.scss";

export const Navbar = () => {
  // const [location, setLocation] = useState();
  const location = window.location.pathname;

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="/
        "
        >
          Portfolio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class={`nav-link  ${location === "/" && "active"}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li class={`nav-item `}>
              <a
                class={`nav-link ${location === "/projects" && "active"}`}
                href="/projects"
              >
                Projects
              </a>
            </li>
            <li class={`nav-item`}>
              <a
                class={`nav-link ${location === "/about-me" && "active"}`}
                href="/about-me"
              >
                About Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
