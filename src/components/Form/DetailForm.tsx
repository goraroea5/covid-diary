import React ,{ useState } from 'react'
import { Grid,Select, MenuItem} from '@material-ui/core';

import { FromDetail, StyledTextField } from './styles';

const detailForm:React.FC = () => {
  return (
    <div>
      <FromDetail>
        <h3>ข้อมูลผู้ป่วย</h3>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={6} >
              <label>เพศ</label>
              <Select disableUnderline  fullWidth style={{background:'white', borderRadius:'3px',borderColor: 'white', padding:'0 6px' }}>
                <MenuItem value={10}>หญิง</MenuItem>
                <MenuItem value={20}>ชาย</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} >
              <label>อายุ</label>
              <StyledTextField fullWidth type="number"/>
            </Grid>
            <Grid item xs={12} >
              <label>อาชีพ</label>
              <StyledTextField  fullWidth />
            </Grid>
          </Grid>
        </form>
      </FromDetail>
    </div>
  )
}

export default detailForm;