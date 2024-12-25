# Profilio2-2

## Description

Profilio2-2 is meant to be a version of Profilio2 that is actually capable of doing what it should.  Profilio2 was primarily part of a class project, but as such it was not important that it actually be functional to achieve a good grade.  As I mentioned in the Profilio2 README, What was lacking in its functionality was the ability of the site to actually send a email from the "Contact" section.  For the course, it was merely important to have the various sections required as part of the assignment.  One of them was that there be a form in "Contacts," but It didn't need to actually function (i.e. send an email when "submit" was clicked).  The purpose of creating Profilio2-2 is to allow me to further work on the site without worrying about messing up the origional code of Profilio2, especially since I am going in a relatively different direction with it.  While I deployed Profilio2 to netlify without a server, when complete, Profilio2-2 will have a backend server running that will recieve a POST from the client and send an email with the data collected in the "Contacts" form using nodemailer. I chose nodeamiler instead of a client-based option because it doesn't seem to require setting up a third-party application to function.   
 

## Installation
This page has not been deployed.  I'm currently not sure where I will put the releavnt files, in GitHub either. I'm going to aim to have the site work if the files are loaded into a local folder.  There using a node.js terminal, one should be able to type "npm install" to install all the necessary node dependencies.  Then, I believe I will plan to allow for a "npm run start" command to both start the server (which will now be required) as well as start up the local client in the user's default browser.  

## License
The github repository uses an MIT license. 

## Contact/Questions/Comments

If anyone has any questions, comments, or advice, I can be contacted at bswiley@gmail.com
