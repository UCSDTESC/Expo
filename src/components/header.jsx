import React from "react"
import styled from "styled-components"

export default ({ title, logo }) => (
  <Header>
    <Img src={logo} alt="The logo of this event"></Img>
    <h1>{title}</h1>
  </Header>
)
const Header = styled.header`
  padding: 2rem 0 2rem 0;
`
const Img = styled.img`
  width: 200px;
`
