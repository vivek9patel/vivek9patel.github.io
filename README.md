# To run this on localhost

### Clone Project and Install npm
- ```git clone -b master --depth=1 https://github.com/vivek9patel/vivek9patel.github.io.git /destination/path```
- ```# apt install npm``` depends on your operating system installing npm maybe different.

### Make _.env_ file in cloned root folder for API Keys
- Copy follow text and paste to _.env_ file
```
REACT_APP_TRACKING_ID = "GOOGLE_ANALYTICS_TRACKING_ID"
REACT_APP_USER_ID = 'EMAILJS_USER_ID'
REACT_APP_TEMPLATE_ID = 'EMAILJS_TEMPLATE_ID'
REACT_APP_SERVICE_ID = 'EMAILJS_SERVICE_ID'
```

1. #### Get API keys from emailjs
<!-- to get emailjs id -->
- Get your apis from [emailjs](https://www.emailjs.com/).
  follow this [docs](https://www.emailjs.com/docs)
- inside that file you need to declare your api keys for _emailjs_, below is the sample code
- your api keys will be here: [page](https://dashboard.emailjs.com/admin/integration)

2. #### Get Tracking ID from google analytics
<!-- to get google analytics tracking id -->
- follow this [docs](https://support.google.com/analytics/answer/10269537?ref_topic=1009620) to get your Tracking ID

### Install node dependencies and run project
- Run ```$ npm install``` , npm will automatically pull modules to run project.
- Run ```$ npm start``` , wait few seconds, npm will start compiling project and start webservice.
- You are ready to access when it show this log
  ```
  ℹ ｢wds｣: Project is running at http://192.168.176.2/
  ℹ ｢wds｣: webpack output is served from 
  ℹ ｢wds｣: Content not from webpack is served from /home/debian/vivek/public
  ℹ ｢wds｣: 404s will fallback to /
  Starting the development server...

  Compiled successfully!

  You can now view vivek9patel-portfolio in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.176.2:3000

  Note that the development build is not optimized.
  To create a production build, use npm run build.
  ```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm run build`

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
