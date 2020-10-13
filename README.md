# zemoga-ui-test Danilo Plazas

UI test presented to Zemoga.

Here you're gonna find an implementation with React. 
The project have the following

-[React](https://reactjs.org/): Implementation and user interaction
-[Redux](https://es.redux.js.org/): To persist the data while the application is running
-[Styled Components](https://www.styled-components.com/): It's a library to wrote scss with Jsx Elements, is very useful because you don't have to worry about classnames, well ... just in some cases
-[Ramda](https://ramdajs.com/): Utilities to make the developer life a little more easier.
-[Axios](https://github.com/axios/axios): Used fo a consulting JSON in this [repo](https://github.com/Wartaron/json-server-data) using a [site](http://my-json-server.typicode.com/) that allow to make mock data calls.
-[Jest](https://jestjs.io/): To test library, but is not fully implemented, it's seems to only work with `yarn` and try to use it with `npm` but i have to do many configurations and I was short of time 😅


# Run the App
To run the app just clone the repo, install packages and so `npm start` and is ready to go.

# Project Structure

The project structure was made to follow the `container-components` structure and test inside every component or page.

```bash
rootDir
   | actions
   | assets
   | components
   | constants
   | pages
   | reducers
   | store
   | translations
   | utils
       | tests
```

# Other comments

I try to reproduce a POEditor or CMS response for the text. In the case we have more than one language, is pretty basic but the idea behind of this is to do the transition to a CMS implementation more easily.
