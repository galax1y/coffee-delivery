import styled from 'styled-components'

export const HomeContainer = styled.div`
  .Shop {
    margin-top: 2rem;
    margin-bottom: 10rem;

    display: flex;
    flex-direction: column;
    flex: 1;

    padding-bottom: 10rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .Display {
    margin-top: 3.375rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 1120px) {
    padding: 0 2rem;
    .Display {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`
