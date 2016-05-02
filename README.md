# alchemy-lang: [Node.js]: https://nodejs.org/en Code to run Alchemy Language Services
A starter app using Node.js to leverage IBM Watson's Alchemy Language services to extract keywords from an input URL and return JSON response.

To run this code locally:

1- Clone the repository to your local space:

git clone https://github.com/joe4k/alchemy-lang.git

2- Change to alchemy-lang directory

cd alchemy-cloud-d3

3- Edit watson/config.js to add your Watson AlchemyAPI credentials. Replace apikey with your APIkey you obtained when you created an Alchemy service on Bluemix.

vi watson/config.js

4- Install dependencies

npm install

5- Run the app locally (monitor what port it starts on)

npm start

6- Verify functionality by pointing your browser to http://localhost:$port ==> port observed in step 5

7- Enter URL to analyze and hit Analyze.

Observe generated word cloud.


To host this app to your Bluemix account (assuming you have cf installed):

1- Clone the repository to your local space:

git clone https://github.com/joe4k/alchemy-lang.git

2- Change to alchemy-lang directory

cd alchemy-lang

3- Edit watson/config.js to add your Watson AlchemyAPI credentials. Replace apikey with your APIkey you obtained when you created an Alchemy service on Bluemix.

vi watson/config.js

4- Edit manifest.yml and change the app and host names to a unique name

vi manifest.yml
==> change name to a unique name
==> change host to a unique name

5- Push the app to Bluemix

cf api https://api.ng.bluemix.net

cf login        ==> enter your Bluemix username and password

select your org and space (if you have more than one) to host your app.

cf push         ==> hosts app in Bluemix

6- Verify functionality by pointing your browser to https://{yourappname}.mybluemix.net

7- Enter URL to analyze and hit Analyze.



