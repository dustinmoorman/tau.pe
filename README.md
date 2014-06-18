tau.pe
======

### What is it?

It's a link shortener service, built by [Dustin Moorman](https://github.com/dustinmoorman) for the web, using [Node](https://github.com/joyent/node), [AngularJS](https://angularjs.org/), [Express.js](http://expressjs.com/), and [MongoDB](http://www.mongodb.org/).

### How does it work?

A simple RESTful API implemented in Node / Express waits in the background while requests are made via AngularJS to send and retrieve data about URLs held in MongoDB. When a user requests a shortened link, an API call is made to retrieve the associated URL and the user is 304'd to the destination!

### Can I contribute?

Of course! Fork me & create pull requests or issues as much as you'd like. 
