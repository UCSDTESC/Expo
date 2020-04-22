import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { graphql } from "gatsby"

import Header from "../components/header"
import Table from "../components/table"
import Footer from "../components/footer"
import Logo from "../assets/logo.svg"

export default ({ data }) => {
  const expoNodes = data.allDataCsv.nodes

  return (
    <Container>
      <GlobalStyle />
      <Header title="Judging Expo" logo={Logo}>
        <h1>SDHacks</h1>
      </Header>
      <Table data={expoNodes} />
      <Footer>
        <span>HackXX 2019</span>
        <span>TESC</span>
        <span>Devpost</span>
      </Footer>
    </Container>
  )
}

export const query = graphql`
  {
    allDataCsv {
      nodes {
        Team
        Table_location
        DevPos_Url
        Desired_Prizes
      }
    }
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`
const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(rgb(67, 210, 240) 0.01%, rgb(142, 68, 173) 100%);
    color: white;
  }
`