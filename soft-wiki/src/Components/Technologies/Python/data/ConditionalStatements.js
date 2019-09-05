import React from "react";
// import "../Technology.scss";

function ConditionalStatements() {
    return (
        <div>
            <h1>The if-Statement</h1>
            <ul>
                <li>An "if statement" is written by using the <b>if</b> keyword.</li>
                <iframe height="400px" width="90%" src="https://repl.it/repls/SwiftFortunateGraphs?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                <li>Python supports the usual logical conditions from mathematics:</li>
                <ul>
                    <li>Equals: a == b</li>
                    <li>Not Equals: a != b</li>
                    <li>Less than: a &lt; b</li>
                    <li>Less than or equal to: a &lt;= b</li>
                    <li>Greater than: a &gt; b</li>
                    <li>Greater than or equal to: a &gt;= b</li>
                </ul>
            </ul>
            <h1>Indentation</h1>
            <ul>
                <li>Python relies on indentation, using <b>whitespace</b>, to define scope in the code.</li>
                <li>Other programming languages often use <b>curly-brackets</b> for this purpose.</li>
                <li>If statement, without indentation (will raise an error)</li>
            </ul>
            <iframe height="400px" width="90%" src="https://repl.it/repls/PhonyMuddyInstitution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            <h1>The elif-Statement</h1>
            <li>The <b>elif</b> keyword is pythons way of saying "if the previous conditions were not true, then try this condition".</li>
            <iframe height="400px" width="90%" src="https://repl.it/repls/DifficultSaneBackups?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            <h1>The else Statement</h1>
            <li>The <b>else</b> keyword catches anything which isn't caught by the preceding conditions.</li>
            <iframe height="400px" width="90%" src="https://repl.it/repls/JauntyDefiantTree?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            <h1>"And" or "Or"</h1>
            <ul>
                <li>
                The <b>and</b> keyword is a logical operator, and is used to <b>combine</b> conditional statements:
                <iframe height="400px" width="90%" src="https://repl.it/repls/ViolentUltimateSystemsoftware?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                </li>
                <li>The <b>or</b> keyword is a logical operator, and is used to combine conditional statements:</li>
                <iframe height="400px" width="90%" src="https://repl.it/repls/HideousLikableType?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            </ul>
        </div>
    )
}

export default ConditionalStatements;