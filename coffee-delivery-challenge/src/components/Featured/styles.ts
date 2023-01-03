import styled from 'styled-components'

export const FeaturedContainer = styled.section`
  display: flex;
  justify-content: space-between;
  min-height: 22.5rem;

  gap: 3.5rem;

  margin-bottom: 5.75rem;

  @media only screen and (min-width: 320px) and (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main {
    flex: 1;

    h1 {
      font-size: 3rem;
      font-weight: 700;
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};

      margin-top: 1rem;
    }

    .Benefits {
      margin-top: 4.125rem;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 1.25rem;
      grid-column-gap: 2.5rem;

      div {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        > span:nth-child(2) {
          color: ${(props) => props.theme['base-text']};
        }
      }

      div:nth-child(1) > span:nth-child(1) {
        background-color: ${(props) => props.theme['yellow-dark']};
      }

      div:nth-child(2) > span:nth-child(1) {
        background-color: ${(props) => props.theme['base-text']};
      }

      div:nth-child(3) > span:nth-child(1) {
        background-color: ${(props) => props.theme.yellow};
      }

      div:nth-child(4) > span:nth-child(1) {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`
