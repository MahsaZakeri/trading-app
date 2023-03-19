# online-trading

Simple trading app, which gets ISIN code( The 12-digit alphanumeric code that uniquely identifies a specific instrument ) and by using web socket it returns a real-time streaming market data to display the latest stock prices with millisecond latency! You can add or remove stocks you want.
This is my first approach to learn vue!

---

## About the app

I decided to make it as simple as possible for the user by choosing a design that is easily understood by everyone.
My design has been divided into three different device’s size so that it can be used by everyone regardless of the device.

My 'HomeView' component is where everything begins, and I have used 'vue-router' to address it, then you can find search bar and watchlist components as well.
In searchBar I check the user's input and implement all necessary validations like : Using an ISIN pattern to prevent invalid data entry.

The web socket is used to stream the price, bid, and ask in real-time, so as a user, you can see it immediately, and you can easily remove stocks from your watch list if you lose interest.

For web socket connection, I check window protocol first to determine whether I need wss (only for https) or ws (for http), and when the user is online, I log it into the console, and when the user disconnects, I notify him/her with an alarm.

---

## Pre-requisites

Please make sure to have [Node](https://nodejs.org) 16 installed.

## Running the code

You can run `yarn` (or `npm install`) to install dependencies. After that, you can run:

```bash
# npm
npm run dev

# or yarn
yarn dev
```

This will start the application in development mode. It will also start the WebSocket server on port 8425.

You can see the client application running in your browser by going to http://localhost:3000.

---
