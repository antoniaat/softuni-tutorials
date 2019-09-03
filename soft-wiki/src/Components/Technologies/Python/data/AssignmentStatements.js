import React from "react";
// import "../Technology.scss";

function AssignmentStatements() {
    return (
        <div>
            <h1>Assignment Statements</h1>
            <p>Assignment statements are used to (re)bind names to values and to modify attributes or items of mutable objects:</p>
            <div className='code-block'>
                <code>
                <p><strong>assignment_stmt</strong> ::=  (target_list "=")+ (starred_expression | yield_expression) </p>
                <p><strong>target_list</strong>     ::=  target ("," target)* [","] </p>
                <p><strong>target</strong>          ::=  identifier</p>
                <p>                    | "(" [target_list] ")"</p>
                <p>                    | "[" [target_list] "]"</p>
                <p>                    | attributeref</p>
                <p>                    | subscription</p>
                <p>                    | slicing</p>
                <p>                    | "*" target</p>
                </code>
            </div>
        </div>
    )
}

export default AssignmentStatements;