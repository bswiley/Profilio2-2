# Profilio2-2

## Description

Profilio2-2 is meant to be a version of Profilio2 that is actually capable of doing what it should.  As I mentioned in the Profilio2 README, What was lacking in its functionality was the ability of the site to actually send a email from the "Contact" section.  I have added that functionality in this reworking. To do so I added a server on the backend that uses nodemailer to use the information collected in the form to send an email to my email address. I chose nodeamiler instead of a client-based option because it doesn't seem to require setting up a third-party application to function.   
 

## Installation
This page has not yet been deployed.  The index.html file is in the root folder where this README.md is located.  Once it is downloaded locally, a .env file needs to be added in the server folder and a email has to be set up to work with the application.  The two environment variable that are referenced in the .env folder are EMAIL_USER which is an email address and EMAIL_PASS which is that email addresses (app) password.  After that file is created one need only type "npm install" in the node terminal followed by "npm start."  The former will install all the required dependencies for the project while the latter will execute both the server and client portions of the code.   

## License
The github repository uses an MIT license. 

## Contact/Questions/Comments

If anyone has any questions, comments, or advice, I can be contacted at bswiley@gmail.com
