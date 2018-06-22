# React Real World Demo

A React application to highlight patterns about:

- Data fetching
- API dependency injection
- Form Handling
- Routing
- i18n
- Testing

## Tips and tricks

How to pass extra properties to a form with Formik.

Solution 1 using the `...` spread operator

```js
<Formik>
  {({ myFormikProps }) => <PlayerForm isNewPlayer={false} {...myFormikProps} />}
</Formik>  
```

Solution 2, using `withProps()` from `recompose` library.  
```js
<Formik>
  {withProps({ isNewPlayer: false })(PlayerForm)}
</Formik>  


## Checking `docz`

* Only supports Webpack 4 (need to update `react-scripts` to the "next" version)
* Use `.mdx` syntax, highlighting not supported by IDEs!
* Seems buggy, not enough mature? (the `wrapper` thing use to provide some context breaks the navigation?)
* Could not make normal JavaScript variable work inside the `.mdx` file, to pass complex values to components
