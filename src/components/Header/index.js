import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.colors.contrastText};
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
    color: rgb(135, 134, 139);
    padding-left: 30px;
    margin-left: 30px;
    border-left: 1px solid rgb(135, 134, 139);
  }
`;

export default Header;