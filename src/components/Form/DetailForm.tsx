import React from 'react';
import { Grid, Select, MenuItem } from '@material-ui/core';

import { FromDetail, StyledTextField } from './styles';

interface ProfileI {
  sex: string
  age: number
  job: string
}

interface Props {
  profile: ProfileI
  setProfile?: any
}

const detailForm = (props: Props): JSX.Element => {
  const {profile, setProfile} = props
  const handleChangeSex = (event: React.ChangeEvent<{ value: unknown }>) => {
    const payload = {sex: event.target.value}
    setProfile({...profile,...payload})
  }
  return (
    <div>
      <FromDetail>
        <h3>ข้อมูลผู้ป่วย</h3>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={6} >
              <label>เพศ</label>
              <Select disableUnderline value={profile.sex}   onChange={handleChangeSex} fullWidth style={{ background: 'white', borderRadius: '3px', borderColor: 'white', padding: '0 6px' }}>
                <MenuItem value={'หญิง'}>หญิง</MenuItem>
                <MenuItem value={'ชาย'}>ชาย</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} >
              <label>อายุ</label>
              <StyledTextField fullWidth type="number" value={profile.age} onChange={(e) => setProfile({
                ...profile, age: e.target.value
              })} />
            </Grid>
            <Grid item xs={12} >
              <label>อาชีพ</label>
              <StyledTextField fullWidth value={profile.job} onChange={(e) => setProfile({
                ...profile, job: e.target.value
              })} />
            </Grid>
          </Grid>
        </form>
      </FromDetail>
    </div>
  )
}

export default detailForm;