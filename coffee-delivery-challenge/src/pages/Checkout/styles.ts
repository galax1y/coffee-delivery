import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    min-width: 40rem;

    > h1 {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    section {
      background-color: ${(props) => props.theme['base-card']};
      border-radius: 6px;
    }

    .Title {
      display: flex;
      gap: 0.5rem;
      strong {
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    .Address {
      padding: 2.5rem;
      color: ${(props) => props.theme['yellow-dark']};

      background-color: ${(props) => props.theme['base-card']};

      display: flex;
      flex-direction: column;
      gap: 2rem;

      .InputContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
          display: flex;
          align-items: center;
          padding: 0.75rem;

          border: 1px solid ${(props) => props.theme['base-button']};
          border-radius: 4px;
          font-size: 0.875rem;

          outline: 0px;

          background-color: ${(props) => props.theme['base-input']};

          line-height: 1.3;
          color: ${(props) => props.theme['base-text']};

          &::placeholder {
            color: ${(props) => props.theme['base-label']};
          }

          &:focus {
            border: 1px solid ${(props) => props.theme['yellow-dark']};
          }
        }

        .Flex {
          flex: 1;
        }

        .UF {
          width: 5rem;
        }

        > div {
          display: flex;
          gap: 0.75rem;
        }
      }
    }

    .Payment {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2.5rem;

      svg {
        color: ${(props) => props.theme.purple};
      }

      .Buttons {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;

        color: ${(props) => props.theme.purple};

        button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0.75rem;

          padding: 1rem;

          font-size: 0.75rem;
          color: ${(props) => props.theme['base-text']};
          text-transform: uppercase;

          background-color: ${(props) => props.theme['base-button']};
          border: 1px solid transparent;
          border-radius: 6px;

          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            color: ${(props) => props.theme['base-subtitle']};
            background-color: ${(props) => props.theme['base-hover']};
          }

          &.Active {
            border: 1px solid ${(props) => props.theme.purple};
            background-color: ${(props) => props.theme['purple-light']};
          }
        }
      }
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 28rem;

    > h1 {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    .Wrapper {
      background-color: ${(props) => props.theme['base-card']};
      border-radius: 6px 44px 6px 44px;
    }

    .Cards {
      display: flex;
      flex-direction: column;
      padding: 2.5rem;
      gap: 1.5rem;
    }

    .Details {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 0 2.5rem 2.5rem;

      p {
        display: flex;
        justify-content: space-between;
        color: ${(props) => props.theme['base-text']};
      }

      strong {
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 700;
        font-size: 1.25rem;
      }
    }

    .FinishOrder {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      padding: 0.75rem 0;

      text-transform: uppercase;
      color: ${(props) => props.theme.white};
      font-size: 0.875rem;
      line-height: 1.6;

      background-color: ${(props) => props.theme.yellow};
      border: 0;
      border-radius: 6px;
      margin-top: 0.75rem;

      cursor: pointer;

      transition: all 0.1s;

      &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
      }

      &:active {
        transform: scale(110%);
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 1120px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;

    main {
      display: flex;
      min-width: 40rem;
      align-items: center;

      .Buttons {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      form {
        width: 40rem;
      }

      .Payment {
        width: 40rem;
      }
    }

    aside {
      display: flex;
      min-width: 30rem;
      align-items: center;

      .Wrapper {
        width: 40rem;
      }
    }
  }
`
