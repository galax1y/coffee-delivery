import styled from 'styled-components'

export const PreviewCardContainer = styled.section`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  .PreviewCard {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme['base-button']};

    > p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
      font-weight: 700;
    }
  }

  .OrderInteraction {
    display: flex;
    gap: 0.5rem;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      padding: 0.5rem;

      border: 0;
      border-radius: 6px;

      background-color: ${(props) => props.theme['base-button']};

      font-size: 0.75rem;
      color: ${(props) => props.theme['base-text']};
      text-transform: uppercase;
      cursor: pointer;

      transition: all 0.1s;

      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }

      &:active {
        transform: scale(110%);
      }

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }

  .Row {
    display: flex;
    gap: 1.25rem;
    padding: 0.5rem 0.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  .Row + p {
    padding: 0.5rem 0.25rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }

  .Column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .Amount {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 4.5rem;

    background-color: ${(props) => props.theme['base-button']};

    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;

    button {
      display: flex;
      color: ${(props) => props.theme.purple};
      border: none;
      background: transparent;

      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }

      transition: all 0.1s;

      &:active {
        transform: scale(150%);
      }
    }
  }
`
