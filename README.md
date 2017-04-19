##Solution

My solution finds each element based on a specific css selector that identifies that element for a site.

This is a very hard problem to come up with a more generalized solution to!

The other issue with this as is that you must first navigate to the login page on the website if it isn't directly on the homepage.

Given more time I think that a much more reliable way to do this would be to store an array of actions that represent the login process for popular sites.
The actions would have 3 types, 'username', 'password', and 'click'. An action might look like this:
```
{ 
    type: 'password',
    selector: '#password-input',    //just a css selector to find where to apply the action.
    timeout: '1000ms'               //optional timeout for skipping animations or similar
}
```

You could combine the actions in whatever order needed to properly get through the login form. For example with Yahoo you must first enter the username, then submit, then password, then submit again.
