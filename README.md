# Employee Tree App
For this task, we will need a react app that allows us to operate with a hierarchical structure of a
company employee list. The app needs to extract a result from an API, which for the task will be
mocked, process the response, building a tree structure of employees with their managed
employees and so on and display a operatable list of all nested employees, allowing us to multiselect
parts of that tree and send a structured request to the server, which will also be mocked.
Requirements
Create a ReactJS application with the following requirements:
 On start, the application should display a loader, while taking the information from the
server, defined as server response
o Remove the loader, once the information is received
o Since the API will be mocked, add a delay to simulate network traffic
 Once the data is received, build up a tree structure, holding the organized data in the
following way:
o Root elements are those entries, without Manager (ManagerId is null)
o Under each root element, nested are the direct dependencies and in them, their
dependencies and so on, until the full structure is rendered
o If there are elements, which are pointing to non-existing Manager, list them below
the list with a warning message

 The render should be a simple nested list, where each nested level is indented depending on
the parent. Each element should be presented with a checkbox and the Employee Title,
followed by Employee Name:
 The user needs to be able to do the following selection:
o When an employee is checked:
 All its children are also checked, with their children, recursively until it
reaches all the leaves
 If the parent was unchecked, it is checked an its parent, recursively, until it
reaches the root element
o When an employee is unchecked:
 All its children are also unchecked, with their children, recursively until it
reaches all the leaves
 If the parent was checked and this was the only remaining checked element,
the parent needs to be unchecked as well, recursively this logic goes up until
it reaches the root element

 Add a button, which when pressed, sends a server request with all selected elements IDs

## Project setup

### Installation

Install the dependencies and devDependencies

```sh
cd employee-tree-app
npm install
```

Start the server:

```sh
cd employee-tree-app
npm start
```


