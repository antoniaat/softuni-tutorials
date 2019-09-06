import React from "react";

function LetVSVar() {
  return (
    <div>
      <p>
        The <strong>var</strong> statement declares a variable, optionally
        initializing it to a value.
      </p>
      <iframe
        height="450px"
        width="90%"
        src="https://repl.it/repls/GlisteningZealousUpgrade?lite=true"
        scrolling="no"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
      ></iframe>

      <p>
        The <strong>let</strong> statement declares a block scope local
        variable, optionally initializing it to a value.
      </p>

      <iframe
        height="450px"
        width="90%"
        src="https://repl.it/repls/FarawayElegantEnvironment?lite=true"
        scrolling="no"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
      ></iframe>
    </div>
  );
}

export default LetVSVar;
