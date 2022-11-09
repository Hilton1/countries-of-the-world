import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 80px;

  @media(max-width: 850px) {
    margin: 0 16px;
    text-align: left;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  @media(max-width: 850px) {
    flex-direction: column;
  }

  margin-bottom: 48px;
`;

export const Countries = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 75px;

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media(max-width: 1000px) {
    grid-template-columns: 1fr 1fr ;
  }
  @media(max-width: 660px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Countrie = styled.div`
  max-width: 260px;
  width: 100%;
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 8px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
  align-items: center;

  @media(max-width: 660px) {
    margin: 0 40px;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    img {
      width: 100%;
      height: 160px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

    }

    .content {
      padding: 24px;

      h1 {
        font-size: 18px;
        margin-bottom: 16px;
      }

      .population, .region, .capital {
        display: flex;

        p {
          margin-left: 8px;
        }
      }
      padding-bottom: 46px;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    padding: 18px 24px;
    color: ${({ theme }) => theme.colors.input};
  }
  input {
    background: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.input};
    padding: 18px 74px;
    width: 480px;
    font-size: 14px;
    border: none;

    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);


    ::placeholder {
      color: ${({ theme }) => theme.colors.input};
    }
  }

  @media(max-width: 850px) {
    input {
      margin-bottom: 40px;
    }
  }

  @media(max-width: 660px) {
    input {
      max-width: 340px;
    }
  }
`;
