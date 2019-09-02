import React from "react";
// import "../Technology.scss";

function ExpressionStatements() {
    return (
        <div>
            <h1>Expression Statements</h1>
            <p>Expression statements are used (mostly interactively) to compute and write a value, or (usually) to call a procedure (a function that returns no meaningful result; in Python, procedures return the value None). Other uses of expression statements are allowed and occasionally useful. The syntax for an expression statement is:
            </p>
            <div>
            expression_stmt ::=  starred_expression
            </div>
            <div>
            An expression statement evaluates the expression list (which may be a single expression).
            </div>
            <p>
            In interactive mode, if the value is not None, it is converted to a string using the built-in repr() function and the resulting string is written to standard output on a line by itself (except if the result is None, so that procedure calls do not cause any output.)
            </p>
        </div>
    )
}

export default ExpressionStatements;