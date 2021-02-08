import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 10px;

  thead th {
    color: rgb(68, 67, 75);
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    padding-left: 15px;
    padding-bottom: 10px;
  }

  tbody tr {
    background: rgb(32, 32, 36);
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    top: 0;
    transition: background 0.2s ease 0s;

    &:hover {
      background-color: #1d1c24;
      border-radius: 3px;
      cursor: pointer;
      top: -10px;
    }
  }

  tbody tr td {
    color: rgb(135, 134, 139);
    padding: 10px 15px;
    font-size: 16px;
  }

  tbody tr td label {
    &[data-status='SUCCESS'] {
      background-color: ${({ theme }) => theme.colors.success};
      border-radius: 5px;
      padding: 2px;
      color: white;
    }
    &[data-status='ERROR'] {
      background-color: ${({ theme }) => theme.colors.wrong};
      border-radius: 5px;
      padding: 2px;
      color: white;
    }

    &:focus {
      opacity: 1;
    }
  }

  tbody tr td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  tbody tr td:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

export default Table;
