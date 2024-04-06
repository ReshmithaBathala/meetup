import {Component} from 'react'
import {Link} from 'react-router-dom'
import RegisterContext from '../../context/ReactContext'

import {
  MeetUpContainer,
  Heading,
  RegisterBtn,
  Paragraph,
  RegisterImage,
} from './styledComponents'

class MeetUp extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {name, topic, isRegistered} = value
          console.log(isRegistered)

          return (
            <MeetUpContainer>
              {isRegistered ? (
                <>
                  <Heading name={false}>Hello {name} </Heading>
                  <Paragraph topic={false}>Welcome to {topic} </Paragraph>
                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              ) : (
                <>
                  <Heading>Welcome to Meetup</Heading>
                  <Paragraph>Please register for the topic</Paragraph>
                  <Link to="/register">
                    <RegisterBtn>Register</RegisterBtn>
                  </Link>

                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              )}
            </MeetUpContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default MeetUp
