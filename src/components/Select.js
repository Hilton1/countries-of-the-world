import styled from 'styled-components';

export default styled.select`
  width: 200px;
  height: 48px;
  padding: 8px 24px;
  background: ${({ theme }) => theme.colors.elements};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-size: 14px;
  line-height: 8px;

  option {
    padding: 10px;
  }
`;
