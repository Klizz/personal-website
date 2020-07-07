import React from "react";

function App() {
  return (
    <div>
      <section className="hero">

        <nav>
          <div className="nav-wrapper transparentBG">
            <a href="/" className="brand-logo transparentBG">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        <div className="hero-inner">
          <h1 className="main-line">Hola</h1>
        </div>
      </section>
      <div className="App container center-align">
        <img src="./images/photo.jpg" alt="Karen Ibarra" id="profile-pic" />
        <h1>Hola, soy Karen Ibarra</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis facilisis erat vitae blandit. Donec sed pharetra lectus, in ultrices felis. Duis justo nunc, egestas non nisi dictum, facilisis interdum quam. Nulla porta mattis erat. In elementum sagittis velit. Praesent tincidunt pulvinar mollis. Nullam vitae ligula aliquam est suscipit porttitor sed sit amet orci. Pellentesque quis magna purus. Etiam rhoncus leo id metus gravida fringilla eget et lacus. Integer imperdiet, neque vel viverra aliquet, odio diam tempus lorem, iaculis bibendum lorem velit sed tellus. Proin in sapien quis sapien sagittis congue at et turpis. Nullam dignissim porttitor sem, eget venenatis ante euismod et. Sed tempor, ante id congue viverra, metus magna semper quam, quis auctor erat massa a diam.
    </p>
    </div>
  )
}

export default App;