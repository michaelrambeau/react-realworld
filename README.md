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
