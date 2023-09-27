import { Link } from 'react-router-dom'
import './Home.css'
import './About.css'
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>Welcome to my first React App</h1>

      <img src="../MyPhoto.jpg" alt="Descriptive Alt Text" />
      <h3>My Photo</h3>
      <p>My name is Pan Li. I'm a senior at NYU, and I major in Computer Science</p>
      <p>
      
        Click here if you want to return to <Link to="/">Home</Link>.
      </p>
    </>
  )
}

// make this component available to be imported into any other file


// make this component available to be imported into any other file
export default About