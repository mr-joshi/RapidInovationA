import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  padding:20px
`
const TaskPage = () => {
  
  return (
   <Container>
    <h1 style={{textAlign:'center'}}>Frontend Developer Basic Assignment</h1>
<h2>Task Outline:</h2>

<h3>1. React JS Setup and Routing</h3>
<p>Objective: Set up a basic React application with routing.</p>
<p>Tasks:</p>
<ul>
  <li>Initialize a new React application using Create React App.</li>
  <li>Set up React Router and create navigational components.</li>
  <li>Implement routing for three pages: Home, Contact Us, and TaskPage.</li>
</ul>

<h3>2. Contact Us Page with Form</h3>
<p>Objective: Create a Contact Us page that includes a comprehensive form using Formik and Yup for validations.</p>
<p>Tasks:</p>
<ul>
  <li>Design a form that collects name, email, address, date of birth, bio, and allows profile and banner image uploads.</li>
  <li>Implement basic validations for each field using Yup.</li>
  <li>On form submission, display the entered data in a popup window.</li>
</ul>

<h3>3. Responsive Landing Page Design</h3>
<p>Objective: Develop a responsive landing page using CSS Grid.</p>
<p>Tasks:</p>
<ul>
  <li>Create the provided design for the landing page using CSS Grid. Ensure that no third-party grid libraries are used.</li>
  <li>The page should be responsive and adapt to different screen sizes using CSS media queries.</li>
</ul>

<h3>4. Redux and State Management Task: Theme Toggle Feature</h3>
<p>Objective: Implement a theme toggling feature using Redux Toolkit that allows the user to switch between a light and dark theme across the application.</p>
<p>Detailed Tasks:</p>
<ul>
  <li>Setup Redux Toolkit</li>
  <ul>
    <li>Initialize the Redux store using the Redux Toolkit.</li>
    <li>Configure the Provider in the main entry file of your React application to wrap around the entire app component tree.</li>
  </ul>
  <li>Create Theme Slice</li>
  <ul>
    <li>Create a slice in the Redux Toolkit named themeSlice.</li>
    <li>Define the initial state with a property theme which can either be 'light' or 'dark'.</li>
    <li>Add actions to toggle the theme between light and dark.</li>
  </ul>
  <li>Implement Theme Toggle Component</li>
  <ul>
    <li>Create a ThemeToggle component that displays a button to toggle the theme.</li>
    <li>This component should read the current theme from the Redux state and dispatch the toggle action when the button is clicked.</li>
  </ul>
  <li>Use Redux State in Components</li>
  <ul>
    <li>Use the theme state from the Redux store to conditionally apply styles to components.</li>
    <li>For instance, apply different background colors and text colors based on the current theme.</li>
    <li>Demonstrate passing the theme data as props to several components, illustrating the use of Redux state in conjunction with component props.</li>
  </ul>
  <li>Demonstrate Local State and Props Interaction</li>
  <ul>
    <li>In one of the components, use the local state to manage a UI element's state (such as a modal or dropdown) that is also styled based on the global theme state.</li>
    <li>This will show how Redux's state and React's local state can coexist and be used together in practical scenarios.</li>
  </ul>
  <li>Additional Notes</li>
  <ul>
    <li>Ensure that the Redux store and reducers are properly set up and that the theme state changes affect the entire application's appearance coherently.</li>
    <li>Encourage the use of Redux Toolkit's createSlice for simplicity and efficiency in managing the state logic.</li>
  </ul>
</ul>

<h3>5. Styling with Styled Components</h3>
<p>Objective: Style the landing page using Styled Components.</p>
<p>Tasks:</p>
<ul>
  <li>Apply CSS styles to the landing page using Styled Components.</li>
  <li>Ensure the styles are modular and reusable across components.</li>
</ul>

</Container>  )
}

export default TaskPage