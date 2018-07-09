# About "Containers"

To provide data to the our components, we use "containers" that inject data to their children components using the [Render Props](https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns) pattern.

Generic flow:

```js
<Container api={myApiClient}>
  {data => <div>Do something with {data}</div>}
</Container>
```

Several containers can be combined to provide data from different sources, we can use [React Composer](https://github.com/jamesplease/react-composer) to compose containers together.

## Fetch a list of items

To get a paginated list of items, from any API, we use `<FetchItemList>` container.

Parameters:

- api: the API client used to fetch data
- query: an object that describes data to fetch, **search** criteria and **pagination** filters

Data returned

- data: an array of items that match the query, taking into account the pagination filters
- total: total number of items in the API (greater or equal to the number of items in `data` array, because of the pagination)
