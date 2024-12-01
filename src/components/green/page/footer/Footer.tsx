import React, { Component } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <a href="https://discord.com/users/676854872678858771">
            <span className="text">Discord</span>
            <span className="icon">
              <FaDiscord />
            </span>
          </a>
          <a href="https://github.com/OKE225">
            <span className="text">GitHub</span>
            <span className="icon">
              <FaGithub />
            </span>
          </a>
        </div>
      </footer>
    );
  }
}
