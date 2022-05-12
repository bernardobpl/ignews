# ig.news

This is a medium size project created using `create next-app` and typescript, during the Ignite's React course from Rocketseat.

In this project a lot of topics were covered, but the main focus was on NextJs benefits and features over ReactJs.

## About

This is a Subscription Blog where users are allowed to see a preview of all posts, but they can't read the full article until subscribed. To subscribe you need to Sign In with Github and fill a real form (the form format is real but the charging process is disabled).


![alt App Preview](https://github.com/bernardobpl/ignews/blob/main/public/appPreview1.png?raw=true)

![alt App Preview With Modal](https://github.com/bernardobpl/ignews/blob/main/public/appPreview2.png?raw=true)

![alt App Preview With Modal](https://github.com/bernardobpl/ignews/blob/main/public/appPreview3.png?raw=true)

![alt App Preview With Modal](https://github.com/bernardobpl/ignews/blob/main/public/appPreview4.png?raw=true)

![alt App Preview With Modal](https://github.com/bernardobpl/ignews/blob/main/public/appPreview5.png?raw=true)

## Main libraries used
* Prismic libs as CMS
* Stripe as Online Payment Processor
* FaunaDB as Database for serverless app
* Axios for HTTP Requests
* Next-auth for handling Authentication
* Sass to style the app

## Running app

To run the app you must create your own: 
* Stripe Account and "Subscription" product
* FaunaDB Account and Database with "users" and "subscriptions" collections, and indexes for querying data
* Prismic Account and integrate with your local project
* Github Account and create an instance of your project to use Github API

Set the following environment variables of each: 
### Stripe
* STRIPE_API_KEY=
* NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
* STRIPE_WEBHOOK_SECRET=
* STRIPE_SUCCESS_URL=
* STRIPE_CANCEL_URL=

### Github
* GITHUB_CLIENT_ID=
* GITHUB_CLIENT_SECRET=

# FaunaDB
FAUNADB_KEY=

# Prismic
PRISMIC_ACCESS_TOKEN=

Since stripe can't identify localhost, you must use stripe-cli to register your project, listen to webhooks and forward it to localhost webhook route manually.

Finally:
* Clone the project
  `git clone [repo_url]`
* Install dependencies
  `yarn`
  or
  `npm install`
* Run script "start"
  `yarn start`
  or
  `npm run start`
* It will open automatically in `http:/localhost:3000`

## What I've learned
* Manage authentication process using social medias with Next-Auth is very useful and convenient for developers and users
* That was the first time i created a payment service and it felt great using Stripe because their online platform and api documentation are simple to understand
* Always heard about famous CMS's  like WordPress and GraphCMS but i've never used it. In this project i understood how powerful are those systems. They can give an insane boost to your application and save too much time. I'd say it is a "go to solution" if you can afford the price, especially if it's a small to medium application where is still cheap.
* Serverless was a confusing concept until create a serverless project. It opened my eyes about what front end is becoming and how far can we go before need a real server. It's not a bulletproof solution, and does not replace backend servers, but is still a surprise wha it can achieve.
* About database, FaunaDB has a interesting concept, and fits like a glove when used by serverless applications since it doesn't suffer the cost of oppening a database connection. Moreover it has a intuitive query language called FQL.

# Notes
* I was familiar with JS, ReactJS and NextJS. Tryied out NextJS and knew some of the features, but every course can still present new things, and now i feel comfortable to create my own Next project without help.
* I concluded that it's not necessary to rely on the same packages for everything. I had some bad times configuring styled-components for other next projects, and just figured out how easy was to use Sass instead, and didn't miss the styled-components at all.
* As it says: "NextJs is the ReactJs for production".