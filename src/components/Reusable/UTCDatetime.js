import { Grid, Typography } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();
  const utcTimeValue = (
    <Grid
      item
      xs={12}
      sx={{
        height: '60px',
        display: "flex",
        justifyContent: "center"
      }}>

      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: '500',
          fontSize: { xs: '15px', sm: '18px' },
          color: 'rgba(255, 255, 255, .7)',
          lineHeight: 1,
          alignItems: "center",
          fontFamily: 'Poppins',
        }}
      >
        {utcFullDate} GMT
      </Typography>
    </Grid>
  );
  return utcTimeValue;
};

export default UTCDatetime;
