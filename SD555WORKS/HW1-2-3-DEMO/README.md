[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Y5mz-Bx2)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15158836)

### SD555-Homework-01

- Create an Angular application
- Create a new component `students`
- Display the `students` component as a child to `AppComponent`
- Add the following state to the `students` component:

```typescript
students = [
  { _id: "1", name: "asaad saad" },
  { _id: "2", name: "theo saad" },
  { _id: "3", name: "mike saad" },
  { _id: "4", name: "mada saad" },
];
```

- Display list of students, and use Directives to apply a zebra background color (odd rows in grey, even rows in white)
- Use Pipes to display all names in title case
- Use Pipes to truncate long names to be limited to 20 chars, and display three dots `...` at the end if they were truncated

/////////

### SD555-Homework-02

1. Practice the following with signals:
   - create a signal `$count` with 0 value, to represent a counter
   - when the component mount, create an interval to increment the `$count` signal value by one
   - display the `$count` signal in the template
   - create a computed signal `$is_prime`, so when the `$count` signal value is a prime number, it's set to `true`, otherwise it's set to `false`.
   - based on the `$is_prime` signal value, display a message in the template to indicate whether the number value is prime or not.
   - create an effect, so when `$is_prime` is `true`, it prints to the console a message: `Found a Prime number: n`

```typescript
// the effect prints to the console the following:
// Found a Prime Number 2
// Found a Prime Number 3
// Found a Prime Number 5
// Found a Prime Number 7
// Found a Prime Number 11
// Found a Prime Number 13
// Found a Prime Number 17
```

2. Create a custom pipe `shorten` that truncates strings for a given length and concatenate `...` at the end. Example:

```typescript
@Component({template: `{{'Welcome to SD555 course' | shorten:10}}`}) // it will render `Welcome to...`
```

```typescript
@Component({template: `{{'Welcome MSD!' | shorten:25}}`}) // it will render `Welcome MSD!`, no changes.
```

///////
@Component({template: `{{'Asaad and Theo' | swapLetters:{'a':'@', 'o': '0'} }}`}) // it will render `@s@@d @nd The0`

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wAK3Tios)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15175564)

### SD555-Homework-03

- Install [Angular Material](https://material.angular.io/) and explore the `Card` and `Paginator` components.
- Choose one of these two way to get the data, and type the data using [JSON to TS](https://transform.tools/json-to-typescript):
  - Go to [DummyJSON API](https://dummyjson.com/products), save the response in `data.ts`.
  - Send a vanilla `fetch()` request when the component mounts.
- Create a component `products` to display the products one-by-one with pagination.
  - Each product card has the name, description, thumbnail, and a button `More...` to show the full product details.
  - Use the necessary pipes to truncate the product title and description.
- When the user clicks on the product `More...` button, display a component that shows the full product details. This `product` details component receives the data from its parent component.

Notes:

- Use `signal` to hold the components state.
- Use `computed` to compute the product details of the product that needs to be displayed in the `product` component.
- Use `effect` to log the `id` of the currently displayed product.
- Apply the idea of Container/Stateful vs. Representational/Stateless components in your code. The `products` component is stateful, and the `product` component is stateless.

The following HTML/CSS will center the content of the page horizontally and vertically:

```html
<div class="container">
  <div class="centered">Content</div>
</div>
```

```css
.container {
  /* Center horizontally */
  margin: 0 auto;
  width: 400px;
  height: 100vh;
  /* Setup to center vertically */
  position: relative;
}
.centered {
  /* Center vertically */
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
```
