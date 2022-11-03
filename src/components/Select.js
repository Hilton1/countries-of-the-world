import styled from 'styled-components';

export default styled.select`
  width: 200px;
  padding: 18px 24px;
  background: ${({ theme }) => theme.colors.elements};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  font-size: 14px;
  line-height: 8px;

  option {
    padding: 10px;
  }
`;
