# Tru Challenge

## The App

The app serves as a base for integrating across the full-stack with Tru ID's Sim Check API.

## Tools

- frontend => React Native (Expo), TypeScript & React (Native) Router
- server => Node (Express), TypeScript & [Tru ID SIMCheck API](https://tru.id/docs/sim-check)

## Getting Started

In order to get the project up and running on your machine:

- Clone into a directory of your choosing
- Restore dependencies by running either `npm i` or `yarn`
- Create a Tru ID account @ https://tru.id
- Installing the TRU ID CLI:
- To install the Tru ID CLI run:

```bash
npm install -g @tru_id/cli
```

After installation you will be prompted to input your default credentials and data residency which can be found in the [Tru ID Console](https://tru.id/console)
After that, create a new project within your server/backend i.e. server directory via:

```bash
tru projects:create
```

It will create a Tru.json file which contains credentials for the initialized project

- copy over the .env.example file to a new .env file and replace the values of TRU CLIENT\*ID and TRU_CLIENT_SECRET with the client_id and client_secret values as that's what you'll use to make API calls. Also replace the BASE_URL with the host value specified [here](https://tru.id/docs/sim-check/guide#making-a-simcheck-api-call)
  **if** the data residency you selected while creating an account

## Starting Project

To start server navigate to the server directory directory and run `npm run dev` or `yarn dev`
To start frontend on web navigate to the frontend directory and run `npm run web` or `yarn web`
To start frontend on Android navigate to the frontend directory run `npm run android` or `yarn android`

## Note About Expo Go

Unfortunately, Expo Go, the new Expo Client at this moment has a whole host of issues revolving around projects not starting, timing out, Expo Go crashing etc. So running on Android might be tedious or extremely difficult. See next section for potential fix.

## Using Old Expo Client

If you haven't updated to Expo Go and are using the old Expo client which doesn't have these bugs then you have to downgrade Expo in this project because Expo 40 doesn't work with the old client. You can do that by running:

```bash
yarn add expo@^37.0.0
```

If you have updated and would like to downgrade you could search for the SDK of the old version of Expo online and install that then downgrade Expo.

## Contributing

Contributions are welcome. To contribute, open an issue then create a PR linking the issue.
