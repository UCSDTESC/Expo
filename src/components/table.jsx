import React from "react"
import styled from "styled-components"

export default ({ data }) => {
  console.log(data)

  return (
    <TableContainer>
      <Table>
        <THead>
          <TRow>
            <th>Team</th>
            <th>Table Location</th>
            <th>DevPost URL</th>
            <th>Desired Prizes</th>
          </TRow>
        </THead>
        <tbody>
          {data.map((node, i) => (
            <TRow key={i}>
              <td>{node.Team}</td>
              <td>{node.Table_location}</td>
              <td>{node.DevPos_Url}</td>
              <td>{node.Desired_Prizes}</td>
            </TRow>
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
  color: #333;
  border-spacing: 0;
  width: 100%;
  background-color: white;
  border-collapse: collapse;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
`

const THead = styled.thead`
  background: #8e44ad;
  color: white;
`

const TRow = styled.tr`
  height: 50px;
`
