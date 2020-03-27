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
            <th>Project</th>
            <th>Table</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {expoNodes.map(node => (
            <tr key={node.table}>
              <th>{node.project}</th>
              <th>{node.table}</th>
              <th>{node.link}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  {
    allDataCsv {
      nodes {
        project
        table
        link
      }
    }
  }
`
