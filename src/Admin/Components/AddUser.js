import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Input, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, register } from '../../slices/userSlice';
import Alert from '../../Components/Alert';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, color: "#452a72" }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: "#452a72",
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function AddUser({ open, setOpen }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false)
    const [message, setMessage] = useState("")
    const [errorType, setErrorType] = useState("")

    const dispatch = useDispatch()
    const { isCreated, error, isLoading, data } = useSelector((state) => state.userCustom)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ email, password })).then(() => {
            setOpen(false)
            setFlag(true)
        }).then(()=>{
            dispatch(getAllUsers())
        })
    }

    useEffect(() => {
        if (!isCreated && error) {
            setMessage(error);
            setErrorType('error');
        } else if (isCreated) {
            setMessage(data.message);
            setErrorType('success');
        }
    }, [isCreated, error, data]);




    return (
        <div>

            {
                flag && <Alert flag={flag} setFlag={setFlag} errorType={errorType} message={message} />
            }
            <BootstrapDialog
                sx={{ zIndex: "11000" }}
                onClose={() => setOpen(false)}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setOpen(false)}>
                    Create new account
                </BootstrapDialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent dividers className='grid grid-row-1 gap-6'>
                        <div>
                            <input
                                placeholder='email'
                                className="w-full p-3 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                placeholder='Password'
                                type="password"
                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>


                    </DialogContent>
                    <DialogActions>
                        <button
                            type='submit'
                            className="bg-[#452a72] font-medium transition duration-150 ease-in-out hover:bg-transparent rounded text-white hover:text-[#452a72] px-6 py-2 text-sm border border-[#452a72] focus:outline-none"
                        >
                            Save
                        </button>
                    </DialogActions>
                </form>
            </BootstrapDialog>
        </div>
    );
}
