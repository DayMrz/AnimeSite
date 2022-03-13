# Anime Site
Hey there! this is my first attempt to create something that I am passionate about. 
Please if you have any questions or there are misconceptions, let me know!! :)



## Getting Started

- Create a package.json file.
Generate it without having it ask any questions:
````ssh
npm install
````


- Express
To use it, we have to require it on our index.js file.

Keep in mind that port 3000 allows you to experiment with express without root access. 
It will always be located at the end of our file.

````
const express = require('express');
const app = express();

app.get('/anime' (req, res) => {
    console.log('HEY, IT IS WORKING!!)
} ) // something like this will check if your code is working as expected


app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})
````

- EJS
 To use our EJS package you need to create a path for the directory that will contained the EJS files (named it as you pleased) 
````javascript
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

````

- Mongoose

Go to the documentation and follow the steps to run mongoose. [Getting Started](https://mongoosejs.com/docs/index.html)

Remember!!  for this to run, you must have running background 'mongod' or 'mongodb'

(Set up MongoDB on [Windows](https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328) or [MAC](https://www.bing.com/videos/search?view=detail&mmscn=vstp&ru=%2Fvideos%2Fsearch%3Fq%3Dmongodb%2Btutorial%2Bmac%26FORM%3DHDRSC3&mid=EDC05EF118D6CDBE43ACEDC05EF118D6CDBE43AC&q=mongodb%20tutorial%20mac))


````javascript
mongoose.connect('mongodb://localhost:27017/animeApp', { userNewUrlParser: true })
    .then(() => {
        console.log('Mongo CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('Mongo OHH no error!')
        console.log(err)
    })
````
run this node app in your command line. 

````ssh
node <file>
````
- *Note:*
When you launch your node.js application with Nodemon it will monitor for any changes and automatically restart the server, improving your productivity. 
````
npm i -g nodemon
````




The above formatting is used to create a box which can display code or command in a well formatted manner.


## Usage

Below is another example of displaying
````python
import csv

with open("sample.csv","r") as csvinput: # read input csv file
    reader = csv.reader(csvinput) # create a reader
    for row in reader:
        print(row[0])
````
