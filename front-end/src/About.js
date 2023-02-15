import { useState, useEffect } from 'react';
/**
 * A React component that represents the About Us page.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const About = props => {
    const[text, setText] = useState('')
    const[imageURL, setImageURL] = useState('')
   
    const retrieveContent = () => {
        fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
        .then(response => response.json())
        .then(data => {
            setText(data.text)
            setImageURL(data.imageURL)
        })
    }

    useEffect(() => {
        retrieveContent()
      }, [])

    return (
      <>
      <h1>About Us</h1>
      <br/>
      <div>{text}</div>
      <br/>
      <img src={require(`./${imageURL}`)} width="500" height="500"></img>
      </>
    )
  }
  
  // make this component available to be imported into any other file
  export default About