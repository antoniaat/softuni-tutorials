import React, { Component } from "react";
import "./CSharp.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

class CSharp extends Component {
  render() {
    return (
      <div className="CSharp">
        <Tabs
          vertical
          onChange={tabId => {
            console.log(tabId);
          }}
        >
          <TabList>
            <Tab tabFor="Methods">
              <h3>Methods</h3>
            </Tab>
            <Tab tabFor="Interfaces">
              <h3>Interfaces </h3>
            </Tab>
            <Tab tabFor="Lambda">
              <h3>Lambda</h3>
            </Tab>
            <Tab tabFor="Generics">
              <h3>Generics</h3>
            </Tab>
            <Tab tabFor="Expression">
              <h3>Expression Trees</h3>
            </Tab>
          </TabList>
          <TabPanel tabId="Methods">
            <article>
              <p>
                A method is a code block that contains a series of statements. A
                program causes the statements to be executed by calling the
                method and specifying any required method arguments. In C#,
                every executed instruction is performed in the context of a
                method. The Main method is the entry point for every C#
                application and it is called by the common language runtime
                (CLR) when the program is started.
              </p>
              <h1>Method signatures</h1>
              <p>Methods are declared in a class or struct by specifying:</p>
              <ul>
                <li>
                  An optional access level, such as public or private. The
                  default is private.
                </li>
                <li>Optional modifiers such as abstract or sealed.</li>
                <li>The return value, or void if the method has none.</li>
                <li>The method name.</li>
                <li>
                  Any method parameters. Method parameters are enclosed in
                  parentheses and are separated by commas. Empty parentheses
                  indicate that the method requires no parameters.
                </li>
              </ul>

              <h1>Method invocation</h1>
              <p>
                Methods can be either instance or static. Invoking an instance
                method requires that you instantiate an object and call the
                method on that object; an instance method operates on that
                instance and its data. You invoke a static method by referencing
                the name of the type to which the method belongs; static methods
                do not operate on instance data. Attempting to call a static
                method through an object instance generates a compiler error.
                Calling a method is like accessing a field. After the object
                name (if you are calling an instance method) or the type name
                (if you are calling a static method), add a period, the name of
                the method, and parentheses. Arguments are listed within the
                parentheses, and are separated by commas. The method definition
                specifies the names and types of any parameters that are
                required. When a caller invokes the method, it provides concrete
                values, called arguments, for each parameter. The arguments must
                be compatible with the parameter type, but the argument name, if
                one is used in the calling code, does not have to be the same as
                the parameter named defined in the method. In the following
                example, the Square method includes a single parameter of type
                int named i. The first method call passes the Square method a
                variable of type int named num; the second, a numeric constant;
                and the third, an expression.
              </p>
            </article>
          </TabPanel>
          <TabPanel tabId="Interfaces">
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
          </TabPanel>
          <TabPanel tabId="Lambda">
            <article>
              <p>
                Use the lambda declaration operator => to separate the lambda's
                parameter list from its body. To create a lambda expression, you
                specify input parameters (if any) on the left side of the lambda
                operator and an expression or a statement block on the other
                side. Any lambda expression can be converted to a delegate type.
                The delegate type to which a lambda expression can be converted
                is defined by the types of its parameters and return value. If a
                lambda expression doesn't return a value, it can be converted to
                one of the Action delegate types; otherwise, it can be converted
                to one of the Func delegate types. For example, a lambda
                expression that has two parameters and returns no value can be
                converted to an Action delegate. A lambda expression that has
                one parameter and returns a value can be converted to a Func
                delegate. In the following example, the lambda expression x => x
                * x, which specifies a parameter that’s named x and returns the
                value of x squared, is assigned to a variable of a delegate type
              </p>
            </article>
          </TabPanel>
          <TabPanel tabId="Generics">
            <article>
              <p>
                Generics were added to version 2.0 of the C# language and the
                common language runtime (CLR). Generics introduce to the .NET
                Framework the concept of type parameters, which make it possible
                to design classes and methods that defer the specification of
                one or more types until the class or method is declared and
                instantiated by client code. For example, by using a generic
                type parameter T you can write a single class that other client
                code can use without incurring the cost or risk of runtime casts
                or boxing operations, as shown here:
              </p>
              <p>
                Generic classes and methods combine reusability, type safety and
                efficiency in a way that their non-generic counterparts cannot.
                Generics are most frequently used with collections and the
                methods that operate on them. Version 2.0 of the .NET Framework
                class library provides a new namespace,
                System.Collections.Generic, which contains several new
                generic-based collection classes. It is recommended that all
                applications that target the .NET Framework 2.0 and later use
                the new generic collection classes instead of the older
                non-generic counterparts such as ArrayList. For more
                information, see Generics in .NET. As the type of a method
                parameter in the AddHead method. As the return type of the Data
                property in the nested Node class. As the type of the private
                member data in the nested class.
              </p>
            </article>
          </TabPanel>
          <TabPanel tabId="Expression">
            <article>
              <p>
                If you have used LINQ, you have experience with a rich library
                where the Func types are part of the API set. (If you are not
                familiar with LINQ, you probably want to read the LINQ tutorial
                and the article about lambda expressions before this one.)
                Expression Trees provide richer interaction with the arguments
                that are functions. You write function arguments, typically
                using Lambda Expressions, when you create LINQ queries. In a
                typical LINQ query, those function arguments are transformed
                into a delegate the compiler creates. When you want to have a
                richer interaction, you need to use Expression Trees. Expression
                Trees represent code as a structure that you can examine,
                modify, or execute. These tools give you the power to manipulate
                code during run time. You can write code that examines running
                algorithms, or injects new capabilities. In more advanced
                scenarios, you can modify running algorithms, and even translate
                C# expressions into another form for execution in another
                environment. You've likely already written code that uses
                Expression Trees. Entity Framework's LINQ APIs accept Expression
                Trees as the arguments for the LINQ Query Expression Pattern.
                That enables Entity Framework to translate the query you wrote
                in C# into SQL that executes in the database engine. Another
                example is Moq, which is a popular mocking framework for .NET.
                The remaining sections of this tutorial will explore what
                Expression Trees are, examine the framework classes that support
                expression trees, and show you how to work with expression
                trees. You'll learn how to read expression trees, how to create
                expression trees, how to create modified expression trees, and
                how to execute the code represented by expression trees. After
                reading, you will be ready to use these structures to create
                rich adaptive algorithms.
              </p>
            </article>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default CSharp;
