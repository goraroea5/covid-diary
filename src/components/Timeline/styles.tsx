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
      width: 100%;
      padding: 30px;
      text-align: center;
      border-radius: 60px;
      background-color:#ffc107;
    }
    .title .title-detail h3{
      font-family: Prompt, sans-serif;
      font-weight: 400;
      line-height: 1.2;
      font-size: 24px;
    }
    .date {
      color: #ffc107;
      display: inline-block;
    }
    .icon {
      cursor: pointer;
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