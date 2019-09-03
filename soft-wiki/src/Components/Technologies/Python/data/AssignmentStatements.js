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
            <p>(See section Primaries for the syntax definitions for <i>attributeref, subscription, and slicing</i>.)</p>
            <p>An assignment statement evaluates the expression list (remember that this can be a single expression or a comma-separated list, the latter yielding a tuple) and assigns the single resulting object to each of the target lists, from left to right.</p>
            <p>Assignment is defined recursively depending on the form of the target (list). When a target is part of a mutable object (an attribute reference, subscription or slicing), the mutable object must ultimately perform the assignment and decide about its validity, and may raise an exception if the assignment is unacceptable. The rules observed by various types and the exceptions raised are given with the definition of the object types (see section The standard type hierarchy).</p>
            <h4>Assignment of an object to a target list, optionally enclosed in parentheses or square brackets, is recursively defined as follows.</h4>
            <li>If the target list is a single target with no trailing comma, optionally in parentheses, the object is assigned to that target.</li>
            <li>Else: The object must be an iterable with the same number of items as there are targets in the target list, and the items are assigned, from left to right, to the corresponding targets.</li>
        </div>
    )
}

export default AssignmentStatements;