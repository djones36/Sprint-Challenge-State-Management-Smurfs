1. What problem does the context API help solve?

   it tries to solve the problem with passing props from distant childern back up the react family tree. so a great great grandparent can have acess to the data from its great great grandchild. It helps cut down on prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: events that gives the store data, Their are action types which is the description of the datat to be snet to the store, and action creators that is a function for that return of data.

reducers: a function that is using the current sate of the app, it copies the state and returns a new state that mutates our state with new data from an action.

store: an object that holds the state or data of the react app.  
the single source of truth in a redux application is the store state, this is where all the app data is stored and is immutable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The difference between app state and component state is app state is state that is stored in the store and can be shared with all the components. it is good to use in large apps or when you have to pass data around from components with distant relationships.
the component state is the parent child relationship. only the child has access to the data from the parent. it is good to use in small paps or when hte data is only needed by some child components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

1. What is your favorite state management system you've learned and this sprint? Please explain why!

   my favorite state management is context because it can make use of the reducer and it just seemed easier for me to learn at first. But after so much practice with redux this week its starting to grow on me.
