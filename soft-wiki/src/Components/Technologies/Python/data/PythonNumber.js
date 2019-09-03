import React from "react";
// import "../Technology.scss";

function PythonNumber() {
    return (
        <div>
            <h1>Numeric Types in Python</h1>
            <p>In any OOP language, there are many different data types. In Python, number data types are used to store numeric values. There are four different numerical types in Python:</p>
            <li><b>int</b> (plain integers): this one is pretty standard -- plain integers are just positive or negative whole numbers.</li><br></br>
            <li><b>long</b> (long integers): long integers are integers of infinite size. They look just like plain integers except they're followed by the letter "L" (ex: 150L).</li><br></br>
            <li><b>float</b> (floating point real values): floats represent real numbers, but are written with decimal points (or scientific notaion) to divide the whole number into fractional parts.</li><br></br>
            <li><b>complex</b> (complex numbers): represented by the formula a + bJ, where a and b are floats, and J is the square root of -1 (the result of which is an imaginary number). Complex numbers are used sparingly in Python.</li><br></br>
        </div>
    )
}

export default PythonNumber;