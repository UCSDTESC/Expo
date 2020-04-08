import React from "react"
import styled from "styled-components"

export default ({ data }) => {
  console.log(data)

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Table Location</th>
            <th>DevPost URL</th>
            <th>Desired Prizes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((node, i) => (
            <tr key={i}>
              <th>{node.Team}</th>
              <th>{node.Table_location}</th>
              <th>{node.DevPos_Url}</th>
              <th>{node.Desired_Prizes}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}

const TableContainer = styled.section`
  flex: 1;
`

const Table = styled.table`
  margin: 0 auto;
`
