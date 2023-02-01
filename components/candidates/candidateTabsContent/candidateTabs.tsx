import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tabs: {
    '& .MuiTabs-indicator': {
      background: 'linear-gradient(139.76deg, #6e0674 17.15%, #4660af 86.86%)',
      height: 4,
      borderRadius: '0 0 4px 4px',
    },
    '& .MuiTab-root': {
      fontFamily: `'Poppins', sans- serif`,
      fontSize: 18,
      fontWeight: 400,
      color: '#697A8D !important',
      padding: '0px 0px 0px 0px !important',
      background: 'transparent',
      marginRight: '30px',
    },
    '& .Mui-disabled': {
      display: 'none',
    },
    '& .MuiTabScrollButton-root': {
      marginRight: '0',
    },
    '& .MuiButtonBase-root ': {
      textTransform: 'none',
    },
    '& .MuiTab-root.Mui-selected': {
      fontSize: 18,
      fontWeight: 500,
      background: '-webkit-linear-gradient(139.76deg, #6e0674 17.15%, #4660af 86.86%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
});

export default function CandidateTabs(props) {
  const classes = useStyles();
  const setCount = props.setCount;
  const data = props.data;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
    setCount(newValue);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-8">
          <Box sx={{ width: '100%', bgcolor: 'transparent' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              className={classes.tabs}
            >
              {data.map((val, index) => {
                return (
                  <Tab
                    key={index}
                    label={val.description.charAt(0).toUpperCase() + val.description.slice(1)}
                  />
                );
              })}
            </Tabs>
          </Box>
        </div>
        <div className="col-lg-3 col-4">
          <div className="d-flex justify-content-end">
            {data.map((val, index) => {
              return (
                <>
                  {value === index && (
                    <button
                      className={`${val.isbtn ? 'globle-gradient-btn border-r-6' : 'd-none'}`}
                      onClick={() => val.setIsSelected(!val.isSelected)}
                    >
                      {val.btnText}
                    </button>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
