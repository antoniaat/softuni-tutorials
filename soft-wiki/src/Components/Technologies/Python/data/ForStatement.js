import React from "react";
import { exportNamespaceSpecifier } from "@babel/types";
// import "../Technology.scss";

function ForStatement() {
    return (
        <div>
            <h1>For Statement</h1>
            <p>A <b>for</b> loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</p>
            <p>This is less like the <b>for</b> keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</p>
            <p>With the <b>for</b> loop we can execute a set of statements, once for each item in a list, tuple, set etc.</p>
            <div className='code-block'>
                <code>
                    <p>fruits = ["apple", "banana", "cherry"]</p>
                    <p>for x in fruits:</p>
                    <p>&emsp;print(x)</p>
                </code>
            </div>
            <p>The <b>for</b> loop does not require an indexing variable to set beforehand.</p>
            <h2><u>Looping through a string</u></h2>
            <p>Even strings are <i>iterable</i> objects, they contain a sequence of characters:</p>
            <div className='code-block'>
                <code>
                    <p>for x in "banana":</p>
                    <p>&esmp;print(x)</p>
                </code>
            </div>
            <h2><u>The break statement</u></h2>
            <p>With the <b>break</b> statement we can stop the loop before it has looped through all the items:</p>
            <div className='code-block'>
                <code>
                    <p>fruits = ["apple", "banana", "cherry"]</p>
                    <p>for x in fruits:</p>
                    <p>&emsp;print(x)</p>
                    <p>&emsp;if x == "banana":</p>
                    <p>&emsp;&emsp;break</p>
                </code>
            </div>
            <br></br>
            <div className='code-block'>
                <code>
                    <p>fruits = ["apple", "banana", "cherry"]</p>
                    <p>for x in fruits:</p>
                    <p>&emsp;print(x)</p>
                    <p>&emsp;if x == "banana":</p>
                    <p>&emsp;&emsp;break</p>
                    <p>&emsp;print(x)</p>
                </code>
            </div>
            <h2><u>The continue statement</u></h2>
            <p>With the <b>continue</b> statement we can stop the current iteration of the loop, and continue with the next:</p>
            <div className='code-block'>
                <code>
                    <p>fruits = ["apple", "banana", "cherry"]</p>
                    <p>for x in fruits:</p>
                    <p>&emsp;if x == "banana"</p>
                    <p>&emsp;&emsp;continue</p>
                    <p>&emsp;print(x)</p>
                </code>
            </div>
        </div>
    )
}

export default ForStatement;