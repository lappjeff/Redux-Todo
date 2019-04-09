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

  div {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    width: 90%;
    height: 50px;
    margin: 20px auto;
    border-bottom: 1.3px solid white;

    span {
      cursor: pointer;
    }

    .completed {
      text-decoration: line-through;
    }
  }



  }
`

const ListItem = styled.li `
  font-size: 23px;


`

export { ListContainer, ListItem }
