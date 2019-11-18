# Merrill User List - Node Implementation

## What's all included within this little bundle of goodness:
- A fully functional local Hapi.js server 
- A RESTful API providing a comprehensive list of all registered and unregistered users
- Code base with a focus on separation of concerns
- Unit test suite with 100% code coverage
- Integration test suite pointing at live endpoints.  This bonus item ensures our API is \'alive\' and still complies to some agreed upon contract.
- Auto generated Swagger page for the manual testing of the local endpoint.

## Installation instructions
- On GitHub, navigate to the main page of my public repository: `https://github.com/tim-slavin/merrill-test-solution`
- Under the repository name, click the **'Clone or download'** button.  You will need to choose which flavor(HTTPS or SSH) you prefer.
- Open a terminal window
- Change the current working directory to the location where you want the cloned directory to be made
- Type `git clone` and then paste the URL you copied above.
  
  ```` 
  $ git clone https://github.com/tim-slavin/merrill-test-solution.git 
  ````
- Press **'Enter'** , your local clone will be created.
- Change the current working directory to be the newly created one.
  ````
  $ cd merrill-test-solution
  ````
- Once there, run the following to install all dependent modules.
  ````
  $ npm install
  ````

## Start local server
- After all dependent modules have been installed, ensure you are still in the same directory. Run the following to start the Hapi.js server(in dev mode) which has been bundled in the cloned image

````
$ npm start
````
- If everything has been installed and packaged correctly(up to this point), you should see output similar to the following within your terminal window.

````
> merrill-codetest-solution@1.0.0 start <currentWorkingDirectory> /merrill-codetest-solution
> node index.js

Server running on http://<localHostName>:8080
Documentation at http://<localHostName>:8080/documentation
````
- In the above snippet **&lt;localHostName&gt;** , is a placeholder and should not be treated as a literal string value.  It will be customized/taylored to your local settings.
- We now have an instance of the RESTful endpoint running locally.

## Manual testing of the endpoint
- Copy value of url labeled: **'Documentation at:'** from your teminal window.  Refer to previous step.
  - NOTE: I've also had luck simply using  http:localhost:8080/documentation 
- Paste that url within the navigation bar of your favorite browser, and hit **'Enter'**
- The autogenerated Swagger page should be rendered.
- Swagger page should show a single endpoint **'GET /users'**
- Do not click the **'Authorize'** button, since there is no authorization/security has been rolled into this demo server.  
  - Sorry, simply ran out of time.
- Click the endpoint label **'GET /users'**.  This should expose controls allowing you to submit a request against the endpoint.
- Click the **'Try it out'** button.
- Click **'Execute'**
- Wollah !! User results should render accompanied by a '200' status code.

## Run unit test suite
- Kill the local running Hapi.js server
  - Hit **&lt;Ctrl C&gt;** within your terminal window.
- At the prompt within your terminal window, enter the following:
````
$npm test
````
- Should see a total of 29 unit tests having been executed.  With all 29 succeeding.  
````
Test Suites: 20 passed, 20 total
Tests:       29 passed, 29 total
Snapshots:   0 total
Time:        4.601s
````
- As part of each run, an HTML version of the jest unit test coverage report is automatically generated.  Report is accessible at the following location: `<currentWorkingDirectory>/merrill-codetest-solution/coverage/index.html`

## Run integration test suite
- Ensure the local Hapi.js server is not currently running
- At the prompt of your terminal window, submit the following command
````
$npm run integration
````
- This will fire up an instance of our Hapi.js server bundled with the cloned image
- And automatically executes the integration bucket
- Should see a total of 8 tests having been executed.  With all 8 succeeding.
````
Test Suites: 8 passed, 8 total

Tests: 8 passed, 8 total
Snapshots: 0 total
Time: 2.216 s
````

