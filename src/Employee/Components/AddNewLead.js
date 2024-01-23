import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import NewLeadForm from './NewLeadForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLeads } from '../../slices/leadSlice';

export default function AddNewLead({ open, setOpen,userData }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch()


  const { leads } = useSelector((state) => state.leadCustom)


  React.useEffect(() => {

    dispatch(getAllLeads())
  }, [dispatch])

 

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <NewLeadForm open={open} setOpen={setOpen} userData={userData}/>

      </Dialog>
    </div>
  );
}
