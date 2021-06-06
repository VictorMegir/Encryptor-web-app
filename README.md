# Encryptor web app

## A web app that allows you to encrypt and decrypt messages

This website allows the user to use some very basic classical ciphers to encrypt and decrypt text. The web app can be found <a href='https://whispering-castle-52666.herokuapp.com/'>here</a>. Check it out!<br><br>
The user can type their text on a text area and then select a cipher to use.<br> 
By default the starting cipher is the Rot13 cipher and it is set for encrypting the input text.<br>
The user may select a different cipher and set the mode to decrypt. The available ciphers are the following: 
<a href='https://en.wikipedia.org/wiki/ROT13'>Rot13</a>, <a href='https://en.wikipedia.org/wiki/Atbash'>Atbash</a>, <a href='https://en.wikipedia.org/wiki/Caesar_cipher'>Caesar</a>, <a href='https://en.wikipedia.org/wiki/Affine_cipher'>Affine</a> and <a href='https://en.wikipedia.org/wiki/Bacon%27s_cipher'>Baconian</a>.<br>
The user can click on the "Convert" button to perform the operation. The result will be displayed on the bottom textarea.<br>
The user may *stack* different operations of encrypting and decrypting with different ciphers by clicking on the "Add Cipher" button.<br> 

This websites allows the user to browse over a selection of coffees and cookies.
The user can click on the name of any item on the menu to see an image of the item, as well as a short description.
Finally the user can make an order for any number of items by inputing their name and address.

Check out the website <a href='https://infinite-springs-77128.herokuapp.com/'>here</a>.

### Backend
The backend of this application provides an endpoint for getting the item information from the database for all the items displayed on the menu.
The backend also provides an endpoint that creates an order object with the user's information and stores it in the database.
These endpoints were set up using <a href='https://expressjs.com/'>Express.js</a>

### Database
For the database, I used a free cluster of <a href='https://www.mongodb.com/2'>MongoDB</a>. For accessing and working with the database I used the Node.js library <a href='https://mongoosejs.com/'>mongoose</a>.

### Frontend
The frontend of this application consists of four main components. The landing page, the menu (one for coffee and one for cookies), the form that the user fills out to make an order and a pop-up window that shows an image and the description of any item.
The forntend was made with <a href='https://reactjs.org/'>React</a>, using the hooks interface.
Styling was  done using <a href='https://sass-lang.com/'>Sass</a>.

### Deployment
This application was deployed using <a href='https://www.heroku.com/'>Heroku</a> and <a href='https://git-scm.com/'>Git</a>.

### Images
The images for this application were found on the internet and I do not own any of them. They are stored in a personal photo album on <a href='https://imgur.com/'>Imgur</a>.

### Credits
This website was inspired by <a href='https://www.salushiexpress.co.za/'>Salushi Express</a>.
