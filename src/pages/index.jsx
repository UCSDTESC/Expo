import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data);
  const expoNodes = data.allDataCsv.nodes

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Table Location</th>
            <th>DevPost URL</th>
            <th>Desired Prizes</th>
          </tr>
        </thead>
        <tbody>
          {expoNodes.map(node => (
            <tr key={node.table}>
              <th>{node.Team}</th>
              <th>{node.Table_location}</th>
              <th>{node.DevPos_Url}</th>
              <th>{node.Desired_Prizes}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
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
