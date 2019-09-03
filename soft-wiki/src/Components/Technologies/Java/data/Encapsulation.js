import React from "react";


function Encapsulation(){
    return (
        <div>
            <article>
                <h1>Encapsulation</h1>
                <p>Encapsulation is one of the four fundamental OOP concepts. The other three are inheritance, polymorphism, and abstraction.</p>
                <p>Encapsulation in Java is a mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit. In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class. Therefore, it is also known as <b>data hiding.</b></p>
                <h4>To achieve encapsulation in Java :</h4>
                <ul>
                    <li><p>Declare the variables of a class as private.</p></li>
                    <li><p>Provide public setter and getter methods to modify and view the variables values.</p></li>
                </ul>
                <h2>Example</h2>
                <p>Following is an example that demonstrates how to achieve Encapsulation in Java </p>
                <div class="code-block">
                <pre>
                    <code>
                        <span class="comment">/* File name : Person.java */</span> 
                        <p><b>public</b> <b>class</b> Person &#123;</p>
                        <p><b>&#09;&#09;public</b> <span class="variable-type">String</span> name;</p>
                        <p><b>&#09;&#09;public</b> <span class="variable-type">String</span> idNum;</p>
                        <p><b>&#09;&#09;public</b> <span class="keyword">int</span> age;</p>
                        <p>&nbsp;</p>
                        <p><b>&#09;public</b> <span class="keyword">int</span> getAge() &#123;</p>
                        <p>&#09; <span class="keyword">return</span> age;</p>
                        <p>&#09;&#125;</p>
                        <p><b>&#09;public</b> <span class="variable-type">String</span> getName() &#123;</p>
                        <p>&#09; <span class="keyword">return</span> name;</p>
                        <p>&#09;&#125;</p>
                        <p><b>&#09;public</b> <span class="variable-type">String</span> getIdNum() &#123;</p>
                        <p>&#09; <span class="keyword">return</span> idNum;</p>
                        <p>&#09;&#125;</p>
                        <p><b>&#09;public</b> <span class="variable-type">String</span> setAge(<span class="keyword">int</span> newAge) &#123;</p>
                        <p>&#09; age = newAge;</p>
                        <p>&#09;&#125;</p>
                        <p><b>&#09;public</b> <span class="variable-type">String</span> setName(<span class="variable-type">String</span> newName) &#123;</p>
                        <p>&#09; name = newName;</p>
                        <p>&#09;&#125;</p>
                        <p><b>&#09;public</b> <span class="variable-type">String</span> setIdNum(<span class="variable-type">String</span> newId) &#123;</p>
                        <p>&#09; idNum = newId;</p>
                        <p>&#09;&#125;</p>
                        <p>&#125;</p>
                    </code>
                </pre>
                </div>
                <p>The public setXXX() and getXXX() methods are the access points of the instance variables of the EncapTest class. Normally, these methods are referred as getters and setters. Therefore, any class that wants to access the variables should access them through these getters and setters.</p>
                <h3>Benefits of Encapsulation</h3>
                <ul>
                    <li><p>The fields of a class can be made read-only or write-only.</p></li>
                    <li><p>A class can have total control over what is stored in its fields.</p></li>
                </ul>
                

            </article>
        </div>
    )
}
export default Encapsulation;