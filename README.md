# To Run this on localhost

- you need to make a folder named _backend_ and inside that make a file name _email_apis.js_.
- Get your apis from [emailjs](https://www.emailjs.com/).
  follow this [docs](https://www.emailjs.com/docs)
- inside that file you need to declare your api keys for _emailjs_, below is the sample code
- your api keys will be here: [page](https://dashboard.emailjs.com/admin/integration)

```

// add this in your email_apis.js file

const apiKeys = {
    USER_ID: 'YOUR_USER_ID',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
    SERVICE_ID: 'YOUR_SERVICE_ID',
}
export default apiKeys;

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributiors who wants to make this website better can make contribution,which will be **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
