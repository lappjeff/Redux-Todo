import styled from 'styled-components'

const ListContainer = styled.div `
  background: #d9534f;
  color: white;
  grid-area: L;
  list-style-type: none;
  font-size: 27px;

  h3 {
    text-align: center;
    margin: 20px;
    border-bottom: 1.5px solid white;
  }
`

const ListItem = styled.li `
  margin: 20px auto;
  text-align: center;
  border-bottom: 1.3px solid white;
  height: 40px;
  width: 90%;
  font-size: 23px;
`

export { ListContainer, ListItem }
