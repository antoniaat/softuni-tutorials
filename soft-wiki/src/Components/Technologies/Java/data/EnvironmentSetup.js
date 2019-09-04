import React from "react";


function EnvironmentSetup() {
    return (
        <div>
            <article>
                <h1>Local Environment Setup</h1>
                <p>If you are still willing to set up your environment for Java programming language, then this section guides you on how to download and set up Java on your machine. Following are the steps to set up the environment.</p>
                <p>Java SE is freely available from the link <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html" class="link">Download Java.</a> You can download a version based on your operating system.</p>
                <p>Follow the instructions to download Java and run the <b>.exe</b> to install Java on your machine. Once you installed Java on your machine, you will need to set environment variables to point to correct installation directories </p>
                <h2>Setting Up the Path for Windows</h2>
                <h4>Assuming you have installed Java in c:\Program Files\java\jdk directory</h4>
                <ul>
                    <li><p>Right-click on 'My Computer' and select 'Properties'.</p></li>
                    <li><p>Click the 'Environment variables' button under the 'Advanced' tab.</p></li>
                    <li><p>Now, alter the 'Path' variable so that it also contains the path to the Java executable. Example, if the path is currently set to 'C:\WINDOWS\SYSTEM32', then change your path to read 'C:\WINDOWS\SYSTEM32;c:\Program Files\java\jdk\bin'.</p></li>
                </ul>
                <h2>Setting Up the Path for Linux, UNIX, Solaris, FreeBSD</h2>
                <p>Environment variable PATH should be set to point to where the Java binaries have been installed. Refer to your shell documentation, if you have trouble doing this.</p>
                <p>Example, if you use bash as your shell, then you would add the following line to the end of your '.bashrc: export PATH = /path/to/java:$PATH'</p>
                <h3>Popular Java Editors</h3>
                <p>To write your Java programs, you will need a text editor. There are even more sophisticated IDEs available in the market. But for now, you can consider one of the following</p>
                <ul>
                    <li><p><b>Notepad</b> − On Windows machine, you can use any simple text editor like Notepad (Recommended for this tutorial), TextPad.</p></li>
                    <li><p><b>IntelliJ IDEA</b> − Java integrated development environment (IDE) for developing computer software. It can be downloaded from <a href="https://www.jetbrains.com/idea/download/#section=windows" class="link">https://www.jetbrains.com/idea/download/#section=windows</a></p></li>
                    <li><p><b>Eclipse</b> − A Java IDE developed by the eclipse open-source community and can be downloaded from <a href="https://www.eclipse.org/" class="link">https://www.eclipse.org/</a></p></li>
                </ul>
            </article>
        </div>
    )
}
export default EnvironmentSetup;