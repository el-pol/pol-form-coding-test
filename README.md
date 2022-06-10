## Choice of stack
I chose `create-react-app` with Chakra UI. I am very comfortable working with React. I wanted the UI to look clean and not spend too much time on styling, that's also why I chose Chakra. I've used it in the past with personal projects. The goal for me was to set up something fast & usable that looks nice without too much effort, hence my choice. If this were a professional project, I would have used TypeScript as well.

## Assumptions
- The task said *there are three countries to handle*. But I was not sure if this meant three special cases, or three countries in total. I assumed we only have 3 options in total. You can see that in the selector we only have those three countries (Spain, Ghana, Brazil). If this is not the case, what we would do is populate the selector with a list of countries. I would have checked the Internet for a pre-made list and just added it here.
- Working Hours field: I assumed it meant working hours per month.
- Spain Social Security number: I assumed a pattern of `111234567890` and validated for it. Not really checking if this is a 100% valid Spanish number, just the number pattern.
- Date of Birth field: only checking that the date is not in the future. In a professional app we could customize it and not allow them to select a date under 18 years, or any kind of validation we would need. Also, the selection is in a `String` format. I didn't want to play around with `Date` formats as it was not stated in the requirements.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
