import React from "react";
// import "../Technology.scss";

function Interfaces() {
    return (
        <div>
            <article>
              <p>
                An interface contains definitions for a group of related
                functionalities that a class or a struct can implement. By using
                interfaces, you can, for example, include behavior from multiple
                sources in a class. That capability is important in C# because
                the language doesn't support multiple inheritance of classes. In
                addition, you must use an interface if you want to simulate
                inheritance for structs, because they can't actually inherit
                from another struct or class. You define an interface by using
                the interface keyword. as the following example shows.
              </p>
              <p>
                The name of the struct must be a valid C# identifier name. By
                convention, interface names begin with a capital I. Any class or
                struct that implements the IEquatable interface must contain a
                definition for an Equals method that matches the signature that
                the interface specifies. As a result, you can count on a class
                that implements IEquatable to contain an Equals method with
                which an instance of the class can determine whether it's equal
                to another instance of the same class. The definition of
                IEquatable doesn’t provide an implementation for Equals. The
                interface defines only the signature. In that way, an interface
                in C# is similar to an abstract class in which all the methods
                are abstract. However, a class or struct can implement multiple
                interfaces, but a class can inherit only a single class,
                abstract or not. For more information about abstract classes,
                see Abstract and Sealed Classes and Class Members. Interfaces
                can contain methods, properties, events, indexers, or any
                combination of those four member types. For links to examples,
                see Related Sections. An interface can't contain constants,
                fields, operators, instance constructors, finalizers, or types.
                Interface members are automatically public, and they can't
                include any access modifiers. Members also can't be static.
              </p>

              <h1>Interfaces summary</h1>
              <p>An interface has the following properties:</p>
              <ul>
                <li>
                  An interface is like an abstract base class with only abstract
                  members. Any class or struct that implements the interface
                  must implement all its members.
                </li>
                <li>
                  An interface can't be instantiated directly. Its members are
                  implemented by any class or struct that implements the
                  interface.
                </li>
                <li>
                  Interfaces can contain events, indexers, methods, and
                  properties.
                </li>
                <li>Interfaces contain no implementation of methods.</li>
                <li>
                  A class or struct can implement multiple interfaces. A class
                  can inherit a base class and also implement one or more
                  interfaces.
                </li>
              </ul>
            </article>
        </div>
    )
}

export default Interfaces