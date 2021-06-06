# Encryptor web app

## A web app that allows you to encrypt and decrypt messages.
The web app can be found <a href='https://whispering-castle-52666.herokuapp.com/'>here</a>. Check it out!

This website allows the user to use some very basic classical ciphers to encrypt and decrypt text.<br>
* The user can type their text on a text area and then select a cipher to use.<br> 
By default the starting cipher is the Rot13 cipher and it is set for encrypting the input text.<br>
* The user may select a different cipher and set the mode to decrypt. The available ciphers are the following: 
<a href='https://en.wikipedia.org/wiki/ROT13'>Rot13</a>, <a href='https://en.wikipedia.org/wiki/Atbash'>Atbash</a>, <a href='https://en.wikipedia.org/wiki/Caesar_cipher'>Caesar</a>, <a href='https://en.wikipedia.org/wiki/Affine_cipher'>Affine</a> and <a href='https://en.wikipedia.org/wiki/Bacon%27s_cipher'>Baconian</a>.<br>
* The user can click on the "Convert" button to perform the operation. The result will be displayed on the bottom textarea.<br>
* The user may *stack* different operations of encrypting and decrypting with different ciphers by clicking on the "Add Cipher" button.<br> 
* The user may remove ciphers from the *stack* of operations by clicking the "Remove" button. Each cipher has its own "Remove" button but the last cipher cannot be removed.

### Backend
The backend of this application provides an endpoint for getting all the available ciphers that can be used. This is used on the list of ciphers that the user can select from.<br>
In order for the application to perform multiple cipher operations it creates a string sequence that will signify to the backend the which operations need to be performed.<br> 
This sequence is used as a parameter in a POST request. The user's input text is put into the body of that request.<br>
The backend provides an endpoint which receives the text from the POST request and resolves the string sequence. Then the backend performs the appropriate operations and returns the result as JSON.<br>
The backend was written using <a href='https://nodejs.org/en/'>Node.js</a>. These endpoints were set up using <a href='https://expressjs.com/'>Express.js</a>

### Frontend
The frontend of the application consists of three main components. 
* First, a component where the user types the original text.<br>
* Second, a component called Cipher Box which is responsible for the interactions of selecting a cipher, changing the operation type (encrypt and decrypt) and removing a cipher. It is also responible for adding more ciphers and finally making the POST request to the backend.<br>
* Finally there is a component which displays the result that the backend has sent to the appliction.<br>

The forntend was made with <a href='https://reactjs.org/'>React</a>, using the hooks interface.
Styling was  done using <a href='https://tailwindcss.com/'>Tailwind CSS</a>.

### Deployment
This application was deployed using <a href='https://www.heroku.com/'>Heroku</a> and <a href='https://git-scm.com/'>Git</a>.

### Icons
The icons where generated using <a href='https://www.favicon-generator.org/'>Favicon Generator</a>.

### Credits
This website was inspired by <a href='https://cryptii.com/pipes/rot13-decoder/'>Cryptii.com</a>.

## Using the application
To use the application  one needs to follow a few steps.<br>

#### Step 1: Clone the repository
Open up a Git terminal and type `git clone https://github.com/VictorMegir/Encryptor-web-app.git`.

#### Step 2: Install Dependencies using `npm`
* After cloning the repository, navigate into the repository's direcotry by typing `cd Encryptor-web-app`.<br>
* Install the dependencies of the server by typing `npm install`.<br>
* Navigate into the client directory by typing `cd encryptor`.<br>
* Install the dependencies of the client by typing `npm install`. This will take a while.<br>

#### Step 3: Run the development server.
* Start the server of the application by typing `npm start` on the repository's directory.<br>
* Start the client of the application by typing `npm start` on the `encryptor` directory from a *different* terminal.<br>
The development server can be found on your browser on localhost:3000

