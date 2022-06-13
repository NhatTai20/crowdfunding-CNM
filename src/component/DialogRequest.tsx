import React, { useEffect, useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormGroup,
    InputLabel,
    Box,
    TextField
}
    from '@mui/material';

interface Props {
    isCreate: boolean;
    setIsCreate: any;
    show: boolean;
    onHide?: () => void;
}

function DialogRequest({ isCreate, setIsCreate, show, onHide }: Props) {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [recipient, setRecipient] = useState('');

    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
      };
      const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
      };
      const handleChangeRecipient = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecipient(e.target.value);
      };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }


    console.log(description, amount, recipient);
    return (

        <Dialog
            open={show}
            onClose={onHide}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" sx={{fontWeight:'700'}}>
                {"Create new request"}
            </DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <FormGroup>
                        <InputLabel htmlFor="my-input" sx={{color:'#000'}}>Description</InputLabel>
                        <TextField id="desciption" variant="filled" size="small" onChange={handleChangeDescription}/>
                    </FormGroup>
                    <FormGroup >
                        <InputLabel htmlFor="my-input" sx={{color:'#000'}}>Amount</InputLabel>
                        <TextField id="amount" variant="filled" type="number" 
                         InputLabelProps={{
                            shrink: true,
                          }}
                          size="small" required onChange={handleChangeAmount}/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel htmlFor="my-input" sx={{color:'#000'}}>Recipient</InputLabel>
                        <TextField id="recipient" variant="filled" size="small" required onChange={handleChangeRecipient}/>
                    </FormGroup>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button sx={{fontWeight:'900'}} onClick={handleSubmit} autoFocus>
                    Send
                </Button>
                <Button onClick={onHide}>Cancel</Button>
            </DialogActions>

        </Dialog >

    )
}

export default DialogRequest