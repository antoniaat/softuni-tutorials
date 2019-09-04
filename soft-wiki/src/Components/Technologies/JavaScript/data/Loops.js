import React from "react";

function Loops() {
  return (
    <div>
      <h1>
        The{" "}
        <em>
          <strong>for</strong>
        </em>{" "}
        loop:
      </h1>
      <ul>
        <li>Repeats until the condition is evaluated</li>
      </ul>
      <iframe
        height="300px"
        width="90%"
        src="https://repl.it/repls/PrimaryUnconsciousServerapplication?lite=true"
        scrolling="no"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
      ></iframe>
      <h1>
        The{" "}
        <em>
          <strong>while</strong>
        </em>{" "}
        loop:
      </h1>
      <ul>
        <li>Does the same, but has different structure</li>
      </ul>
      <iframe
        height="300px"
        width="90%"
        src="https://repl.it/repls/MajorSingleScreenscraper?lite=true"
        scrolling="no"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
      ></iframe>
    </div>
  );
}

export default Loops;
