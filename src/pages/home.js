import React, { Component } from "react";

class Home extends Component {
    render() {
        return(
            <div>
                <h1>Choose your language</h1>
                <a href="/es">
                <img src="https://image.flaticon.com/icons/svg/197/197397.svg" alt="Mexico" height="100px" />
                </a>
                <a href="/en">
                <img src="https://image.flaticon.com/icons/svg/323/323310.svg" alt="US" height="100px" />
                </a>
            </div>
        );
    }
}

export default Home;