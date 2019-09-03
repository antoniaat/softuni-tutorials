import React from "react";
// import "../Technology.scss";

function ExpressionStatements() {
    return (
        <div>
            <h1>Expression Statements</h1>
            <p>Expression statements are used (mostly interactively) to <strong>compute</strong> and <strong>write</strong> a value, or (usually) to call a procedure (a function that returns no meaningful result; in <strong>Python</strong>, procedures return the value <b><i>None</i></b>).</p>
            <p>Other uses of expression statements are allowed and occasionally useful.</p>
            <p>The syntax for an expression statement is:</p>
            <div className='code-block'>
                <code>
                    <p>expression_stmt <strong>::=</strong>  starred_expression</p>
                    <p className='comment'># An expression statement evaluates the expression list (which may be a single expression).</p>
                </code>
            </div>
            <p>
            In interactive mode, if the value is not <b><i>None</i></b>, it is converted to a string using the built-in <b><i>repr()</i></b> function and the resulting string is written to standard output on a line by itself (except if the result is <b><i>None</i></b>, so that procedure calls do not cause any output.)
            </p>
        </div>
    )
}

export default ExpressionStatements;