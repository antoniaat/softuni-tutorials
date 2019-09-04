import React from "react";
// import "../Technology.scss";

function PythonString() {
    return (
        <div>
            <h1>Strings</h1>
            <p>String literals in python are surrounded by either single quotation marks, or double quotation marks.</p>

            <p><b><i>'hello'</i></b> is the same as <b><i>"hello"</i></b>.</p>

            <p>You can display a string literal with the <b><i>print()</i></b> function:</p>
            <iframe height="400px" width="100%" src="https://repl.it/repls/ZanyWorriedFtpclient?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            <h2><u>Assign string to a variable</u></h2>
            <p>Assigning a string to a variable is done with the variable name followed by an equal sign and the string:</p>
            <iframe height="400px" width="100%" src="https://repl.it/repls/WonderfulEuphoricWatchdog?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            <h2><u>Multiline strings</u></h2>
            <p>You can assign a multiline string to a variable by using three quotes:</p>
            <div className="code-block">
                <code>
                    <p>a = """Lorem ipsum dolor sit amet,</p>
                    <p>consectetur adipiscing elit,</p>
                    <p>sed do eiusmod tempor incididunt</p>
                    <p>ut labore et dolore magna aliqua."""</p>
                    <p>print(a)</p>
                </code>
            </div>
            <p>Or three single quotes:</p>
            <div className="code-block">
                <code>
                    <p>a = '''Lorem ipsum dolor sit amet,</p>
                    <p>consectetur adipiscing elit,</p>
                    <p>sed do eiusmod tempor incididunt</p>
                    <p>ut labore et dolore magna aliqua.'''</p>
                    <p>print(a)</p>
                </code>
            </div>
        </div>
    )
}

export default PythonString;