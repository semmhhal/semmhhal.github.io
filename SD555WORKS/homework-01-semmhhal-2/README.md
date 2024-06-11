[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Y5mz-Bx2)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15158836)
### SD555-Homework-01

* Create an Angular application
* Create a new component `students`
* Display the `students` component as a child to `AppComponent`
* Add the following state to the `students` component:
```typescript
students = [{ _id: "1", name: "asaad saad" }, { _id: "2", name: "theo saad" }, { _id: "3", name: "mike saad" }, { _id: "4", name: "mada saad" }]
```
* Display list of students, and use Directives to apply a zebra background color (odd rows in grey, even rows in white)
* Use Pipes to display all names in title case
* Use Pipes to truncate long names to be limited to 20 chars, and display three dots `...` at the end if they were truncated
