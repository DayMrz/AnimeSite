# Anime App
Hey there! this is my first attempt to create something that I am passionate about. 
In the following lines, I will try to give an explanation of how I did it. 
Please if you have any questions or there are misconceptions, let me know!! :)



## Getting Started

-Create a package.json file.
Generate it without having it ask any questions:
````
npm init -y
````
-Install [Express](http://expressjs.com/), [EJS](https://ejs.co/) & [Mongoose](https://mongoosejs.com/)
<!-- [1]:http://expressjs.com/ "Express"
[2]:https://ejs.co/ "EJS"
[3]:https://mongoosejs.com/ "Mongoose" -->
These are the packages we are going to use. 

````
npm i express ejs mongoose
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
