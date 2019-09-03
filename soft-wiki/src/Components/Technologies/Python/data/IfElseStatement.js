import React from "react";
// import "../Technology.scss";

function IfElseStatement() {
    return (
        <div>
            <h1>If-Else Statement</h1>
            <h2><u>Python Conditions</u></h2>
            <p>Python supports the usual logical conditions from mathematics:</p>
            <li>Equals: <strong>a == b</strong></li>
            <li>Not Equals: <strong>a != b</strong></li>
            <li>Less than: <strong>a &lt; b</strong></li>
            <li>Less than or equal to:  <strong>a &lt;= b</strong></li>
            <li>Greater than:  <strong>a &gt; b</strong></li>
            <li>Greater than or equal to:  <strong>a &gt;= b</strong></li>
            <p>These conditions can be used in several ways, most commonly in "if statements" and loops.</p>
            <p>An "if statement" is written by using the if keyword.</p>
            <div className='code-block'>
                <code>
                    <p>a = 33</p>
                    <p>b = 200</p>
                    <p>if b > a:</p>
                    <p>&emsp;print("b is grater than a")</p>
                </code>
            </div>
            <p>In this example we use two variables, <b>a</b> and <b>b</b>, which are used as part of the if statement to test whether b is greater than a. As a is <b>33</b>, and <b>b</b> is <b>200</b>, we know that <b>200</b> is greater than <b>33</b>, and so we print to screen that <b>"b is greater than a"</b>.</p>
            <h2><u>Indentation</u></h2>
            <p>Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose.</p>
            <div className='code-block'>
                <code>
                    <p>a = 33</p>
                    <p>b = 200</p>
                    <p>if b > a:</p>
                    <p>&emsp;print("b is greater than a") # you will get an error</p>
                </code>
            </div>
            <h2><u>Elif</u></h2>
            <p>The <b>elif</b> keyword is pythons way of saying "if the previous conditions were not true, then try this condition".</p>
            <div className='code-block'>
                <code>
                <p>a = 33</p>
                <p>b = 33</p>
                <p>if b > a:</p>
                <p>&emsp;print("b is greater than a")</p>
                <p>elif a == b:</p>
                <p>&emsp;print("a and b are equal")</p>
                </code>
            </div>
            <p>In this example a is equal to b, so the first condition is not true, but the elif condition is true, so we print to screen that "a and b are equal".</p>
            <h2><u>Else</u></h2>
            <p>The else keyword catches anything which isn't caught by the preceding conditions.</p>
            <div className='code-block'>
                <code>
                <p>a = 200</p>
                <p>b = 33</p>
                <p>if b > a:</p>
                <p>&emsp;print("b is greater than a")</p>
                <p>elif a == b:</p>
                <p>&emsp;print("a and b are equal")</p>
                <p>else:</p>
                <p>&emsp;print("a is greater than b")</p>
                </code>
            </div>
            <p>In this example a is greater than b, so the first condition is not true, also the elif condition is not true, so we go to the else condition and print to screen that "a is greater than b".</p>
            <p>You can also have an <b>else</b> without the <b>elif</b>:</p>
            <div className='code-block'>
                <code>
                <p>a = 200</p>
                <p>b = 33</p>
                <p>if b > a:</p>
                <p>&emsp;print("b is greater than a")</p>
                <p>else:</p>
                <p>&emsp;print("b is not greater than a")</p>
                </code>
            </div>
        </div>
    )
}

export default IfElseStatement;