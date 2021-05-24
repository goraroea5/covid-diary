import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

export const FromDetail = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color:#234973;
  color: white;
  h3 {
    color: #27a740;
  }
`;

export const FromTimeLine = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  padding: 20px;
  border-radius: 10px;
  color: white;
  background-color: #234973;
  h3 {
    color: #27a740;
  }
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

export const StyledDatepicker = styled(KeyboardDateTimePicker)`
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

