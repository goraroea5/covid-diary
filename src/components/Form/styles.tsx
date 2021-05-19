import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";

export const FromDetail = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(187, 199, 212, 0.5);
  color: white;
  h3 {
    color: #bbc7d4
  }
`;

export const FromTimeLine = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  padding: 20px;
  border-radius: 10px;
  color: white;
  background-color: rgb(187, 199, 212, 0.5);
`;


export const StyledTextField  = styled(TextField)`
  background-color: white;
  border-radius: 6px;
  padding: 0 10px;
  .MuiInput-underline:before {
    visibility: hidden;
  }
  /* hover (double-ampersand needed for specificity reasons. */
  && .MuiInput-underline:hover:before {
    visibility: hidden;
  }
  /* focused */
  .MuiInput-underline:after {
    visibility: hidden;
  }
`;