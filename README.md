# KISS-FETCH-AUTH

When fetching resources that require Authentication ...

```js
import fetchAuthFactory from "kiss-fetch-auth"

const getAuthentication = () => {
    // As we are returning a promise, it can be as complex as required.
    return Promise.resolve('Bearer abcdefg')
}

const fetchAuth = fetchAuthFactory({
    auth: getAuthentication
})

// We can now use fetchAuth anywhere that we would have used FetchAPI.

const response = await fetchAuth('http://example.com/api/getSomething')
```


 