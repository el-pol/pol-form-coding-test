## Choice of stack
- [create-react-app](https://create-react-app.dev/) with [Chakra UI](https://chakra-ui.com/). I am very comfortable working with React. I wanted the UI to look clean and not spend too much time on styling, that's also why I chose Chakra. I've used it in the past with personal projects. The goal for me was to set up something fast & usable that looks nice without too much effort, hence my choice. If this were a professional project, I would have used TypeScript as well. Due to time constraints I chose not to.

- [Formik](https://formik.org/) to build the form. It's a very popular library I have used before in a large-scale project. In a small test like this, it was not needed. But if this were a real app, I would have chosen Formik. Why? Forms always tend to grow bigger and include more and more validations. I think it's better to think & choose the correct tool before it's too late. I wanted to make the app as professional-looking as possible, while spending the least possible time on it.

- [date-fns](https://date-fns.org/) to play around with dates: mostly for the `date of birth` field. This is a very small library that makes date handling extremely easy. I use it here to compare present & past dates, to ensure the birthdate is not set in the future.

- [testing-library](https://testing-library.com/docs/) as the assertion library, and [Jest](https://jestjs.io/) as the test runner. These are popular tools in the React ecosystem, both of them I have used in the past and feel comfortable using them.

## Live version
Please find a hosted version of the app here: [https://delightful-pixie-687d0e.netlify.app/](https://delightful-pixie-687d0e.netlify.app/)

## Assumptions
- The task said *there are three countries to handle*. But I was not sure if this meant three special cases, or three countries in total. I assumed we only have 3 options in total. You can see that in the selector we only have those three countries (Spain, Ghana, Brazil). If this is not the case, what we would do is populate the selector with a list of countries. I would have checked the Internet for a pre-made list and just added it here.
- Working Hours field: I assumed it meant working hours per month.
- Spain Social Security number: I assumed a pattern of `111234567890` and validated for it. Not really checking if this is a 100% valid Spanish number, just that it is 12 numbers long.
- Date of Birth field: only checking that the date is not in the future. In a professional app we could customize it and not allow them to select a date under 18 years, or any kind of validation we would need. Also, the selection is in a `String` format. I didn't want to play around with `Date` formats as it was not stated in the requirements.
- I just wrote a few test examples, not 100% coverage. In a real app with more time, we would have strived to have good coverage or at least cover the critical parts.
- We sent all the fields as `String`. Some are numeric. There was no requirement - in some backends the devs expect `Number` or `String`, in this case, I didn't worry about that.

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



