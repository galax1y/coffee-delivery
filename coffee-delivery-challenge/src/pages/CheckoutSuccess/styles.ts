import styled from 'styled-components'

export const CheckoutSuccessContainer = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6.375rem;
  section {
    flex: 1;
  }

  section > h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  section > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 0.25rem;
  }

  .InformationContainer {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    border: 1px solid red;
    border-radius: 6px 36px 6px 36px;

    background: linear-gradient(white, white) padding-box,
      linear-gradient(
          to bottom right,
          ${(props) => props.theme.yellow},
          ${(props) => props.theme.purple}
        )
        border-box;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid transparent;

    div {
      display: flex;
      gap: 0.75rem;

      span {
        font-size: 1rem;

        strong {
          color: ${(props) => props.theme['base-text']};
          font-weight: bold;
        }
      }
    }

    div:nth-child(1) span:nth-child(1) {
      background-color: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
    }

    div:nth-child(2) span:nth-child(1) {
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
    }

    div:nth-child(3) span:nth-child(1) {
      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 1120px) {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
