import React, { Component } from "react";
import "../Technology.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Interfaces from './data/Interfaces';

class JavaScript extends Component {
  render() {
    return (
      <div className="JavaScript technology-container">
        <Tabs
          vertical
          onChange={tabId => {
            console.log(tabId);
          }}
        >
          <TabList>
            <Tab tabFor="Methods">
              <h3>JavaScript Methods</h3>
            </Tab>
            <Tab tabFor="Interfaces">
              <h3>JavaScript Interfaces </h3>
            </Tab>
            <Tab tabFor="Lambda">
              <h3>JavaScript Lambda</h3>
            </Tab>
            <Tab tabFor="Generics">
              <h3>Java Generics</h3>
            </Tab>
            <Tab tabFor="Expression">
              <h3>Java Expression Trees</h3>
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
            <Interfaces></Interfaces>
          </TabPanel>
          <TabPanel tabId="Expression">
            <article>
              <p>
                If you have used LINQ, you have experience with a rich library
                typical LINQ query, those function arguments are transformed
                into a delegate the compiler creates. When you want to have a C#
                expressions into another form for execution in another
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

export default JavaScript;
