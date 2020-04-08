import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Header from "../components/header"
import Table from "../components/table"
import Footer from "../components/footer"

export default ({ data }) => {
  const expoNodes = data.allDataCsv.nodes

  return (
    <Container>
      <Header>
        <h1>SDHacks</h1>
      </Header>
      <Table data={expoNodes} />
      <Footer>
        <h1>Ok bye</h1>
      </Footer>      
    </Container>
  )
}

// TOOD: Query for CSV fields first to dynamically get data
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
  text-align: center
`