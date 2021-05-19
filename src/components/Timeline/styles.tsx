import styled from 'styled-components';

export const TimeLineStyled = styled.div`
    border: 1px solid #ffc107;
    width: 100%;
    height: 100%;
    padding: 30px 10px;
    .title {
      width:80%;
      margin: 0 auto;
    }
    h1 {
      text-align:center;
      color: #ffc107;
    }
    .title .title-detail {
      width: 300px;
      height: 70px;
      margin: 0 auto;
      text-align: center;
      border-radius: 60px;
      background-color:#ffc107;
    }
    .date {
      color: #ffc107;
    }
`;

export const TimelineDate = styled.div`
  width:80%;
  color: #bbc7d4;
  background-color: rgb(187, 199, 212, 0.5);
  border-radius: 5px;
  .event {
    display: flex;
    justify-content: space-between;
  }
  span {
    display: inline-block;
    margin-right: 10px;
    color: #ffc107;
  }
`