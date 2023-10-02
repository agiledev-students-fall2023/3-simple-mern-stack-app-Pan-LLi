import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import './About.css'
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const About = () => {
          const [aboutData, setAboutData] = useState([]);
          const [loading, setLoading] = useState(true);
          useEffect(() => {
          axios
              .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
              .then(response => {
                    console.log(response.data);
                    console.log(response.data.aboutData[0])
                    setAboutData(response.data.aboutData);
                    setLoading(false);
          }
                    
                    )
              .catch(error => console.error(error));
          }, []);

          if (loading) {
                    return <p>Loading...</p>;
          }

          return (
            <>
              <article className="Message-article">
                <img src = {aboutData[0].imageUrl}></img>
               <p>{aboutData[0].about}</p>
             
              </article>
            </>
          )
        }
   
export default About