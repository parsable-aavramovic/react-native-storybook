import styled, {css} from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  border: none;
  padding: 20px;
  border-radius: 40px;

  ${({primary}) =>
    primary &&
    css`
      background-color: #06f;
    `};

  ${({secondary}) =>
    secondary &&
    css`
      background-color: transparent;
      border: 2px solid #06f;
    `};

  ${({disabled}) =>
    disabled &&
    css`
      opacity: 0.5;
    `};
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;

  ${({primary}) =>
    primary &&
    css`
      color: white;
    `};

  ${({secondary}) =>
    secondary &&
    css`
      color: #06f;
    `};
`;
