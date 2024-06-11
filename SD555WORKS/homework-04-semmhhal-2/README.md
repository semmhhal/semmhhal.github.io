### SD555-Homework-04

Refactor Homework-03 and create a service layer that sends an HTTP Get request using Angular `HttpClient` service. 
* Consume the Observable with `.subscribe()`
* Consume the Observable with `AsyncPipe`
* Convert the Observable to a Signal with `toSignal`
  
Configure the paginator and service to display 10 products in each request.
```typescript
// for pagination: you can pass limit and skip qurey params to limit and skip the results 
// page=1 https://dummyjson.com/products?limit=10&skip=0
// page=2 https://dummyjson.com/products?limit=10&skip=10
```
