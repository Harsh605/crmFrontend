import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLeads } from '../../slices/leadSlice';
import NewFollowupForm from './NewFollowupForm';

export default function AddFollowup({ open, setOpen,userData,id }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch()


 

 

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <NewFollowupForm open={open} setOpen={setOpen} userData={userData} id={id}/>

      </Dialog>
    </div>
  );
}
