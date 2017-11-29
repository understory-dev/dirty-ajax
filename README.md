This project is a playground.  Help me find a solution.


## Background

We started our project optimistically by saving whatever the server gave us in
our app's state (see the `idealistic` branch).  As the complexity at the server
increased, so did the data model.

Now we've got a bunch of cryptic data in the application's state (see the
`realistic` branch).  We're not sure what most of it means except the bits we
rely on.  Can we rely on the other stuff?  What happens if the server response
changes?  How can we simplify this?


## Challenge

Find a method of managing data that:

* is robust (handles server response changes well)
* leaves the Redux state understandable
* doesn't make you rip your hair out jumping through abstractions


## Install/Run

This is a CRA, so just `yarn` then `yarn start`.  It is ready to go with Redux
DevTools and React Dev Tools.
