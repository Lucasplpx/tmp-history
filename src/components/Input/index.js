import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: rgb(18, 18, 20);
  border-color: rgb(135, 134, 139);
  color: rgb(255, 255, 255);
  padding: 0px 1em;
  border-radius: 5px;

  &:hover {
    border-color: rgb(130, 87, 229);
  }
  &:focus-within {
    border-color: rgb(130, 87, 229) !important;
  }
`;

export default Input;
