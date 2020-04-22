import React from "react"
import styled from "styled-components"

export default ({ children }) => <Footer>{children}</Footer>
const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.2rem 0;
`
