import React from "react";
// import "../Technology.scss";

function Interfaces() {
    return (
        <div>
            <article>
                <p>An interface is a reference type in Java. It is similar to class. It is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.</p>
                <p>Along with abstract methods, an interface may also contain constants, default methods, static methods, and nested types. Method bodies exist only for default methods and static methods.</p>
                <p>Writing an interface is similar to writing a class. But a class describes the attributes and behaviors of an object. And an interface contains behaviors that a class implements.</p>
                <p>Unless the class that implements the interface is abstract, all the methods of the interface need to be defined in the class.</p>
                <h4>An interface is similar to a class in the following ways :</h4>
                <ul>
                    <li><p>An interface can contain any number of methods.</p></li>
                    <li><p>An interface is written in a file with a <b>.java</b> extension, with the name of the interface matching the name of the file.</p></li>
                    <li><p>The byte code of an interface appears in a <b>.class</b> file.</p></li>
                    <li><p>Interfaces appear in packages, and their corresponding bytecode file must be in a directory structure that matches the package name.</p></li>
                </ul>

                <h4>However, an interface is different from a class in several ways, including :</h4>
                <ul>
                    <li><p>You cannot instantiate an interface.</p></li>
                    <li><p>An interface does not contain any constructors.</p></li>
                    <li><p>All of the methods in an interface are abstract.</p></li>
                    <li><p>An interface cannot contain instance fields. The only fields that can appear in an interface must be declared both static and final.</p></li>
                    <li><p>An interface is not extended by a class; it is implemented by a class.</p></li>
                    <li><p>An interface can extend multiple interfaces.</p></li>
                </ul>
                <h2>Declaring Interfaces</h2>
                <p>The <b>interface</b> keyword is used to declare an interface. Here is a simple example to declare an interface −</p>
                <div class="code-block">
                <pre>
                    <code>
                        <span class="com">/* File name : NameOfInterface.java */</span> <span class="pln">
                        </span>
                        <p><b>import</b> java.lang.*;</p>
                        <p class="comment">// Any number of import statements</p>
                        <p>&nbsp;</p>
                        <p><b>public</b> <b>interface</b> NameOfInterface &#123;</p>
                        <p class="comment">&#09;// Any number of final, static fields</p>
                        <p class="comment">&#09;// Any number of abstract method declarations\</p>
                        <p>&#125;</p>
                    </code>
                </pre>
                </div>
           
            </article>
        </div>
    )
}

export default Interfaces