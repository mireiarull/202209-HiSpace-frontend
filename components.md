# Components

## Data Layer

### Show data

- Robot's list

### Data modifications:

- Get all robots
- Get robot by id
- Delete robot by id
- Add robot
- Update robot by id

## Components

## App

## Header

### Show data:

- Heading with the text "Robot's list" of level 1
- A logo

## List of robots

### Show data:

- A list of the received robots cards

## Robot card

### Show data:

- A robot card with the received info:
  - A name in a heading of level 2
  - An image
  - A list of three features
- A button with a text of "Modify"
- A button with a text of "Delete"

### Modify data:

- Call the deletRobot function passing the id on the click of button
- Link to the form page passing the id on the click of button

## Create/Update form

### Show data:

- A form with the below inputs:
  - Name
  - Image
  - Features
- Button to submit

### Modify data:

- Create a new robot in the database
- Update an existing robot from the database

## Filtre

### Show data:

- An input text to search
- A submit button

### Modify data:

- Get the robots filtered by the id

## Button

- Show the received text

- Send the received action on click
