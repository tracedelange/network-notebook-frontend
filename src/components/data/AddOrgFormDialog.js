import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import plusIcon from '../../assets/add.png'
import { submitOrg } from '../../fetchFunctions'



export default function FormDialog({ reloadOrgs, userToken }) {

    const blankNewOrg = {
        name: ""
    }

    const [open, setOpen] = useState(false);
    const [readyToSubmit, setReadyToSubmit] = useState(false)
    const [newOrg, setNewOrg] = useState(blankNewOrg)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewOrg(blankNewOrg)
    };

    const handleFormChange = (e) => {
        setNewOrg({
            name: e.target.value
        })
    }


    const handleSubmit = () => {

        submitOrg(newOrg, userToken)
            .then((data) => {
                if (data.name) {
                    reloadOrgs(userToken)
                } else {
                    ////console.log('looks like we boofed it')
                    ////console.log('TODO: Add error handling for this case')
                }
            })
        handleClose()

        // //console.log(newOrg)

    }

    useEffect(() => {
        if (newOrg.name !== '') {
            setReadyToSubmit(true)
        } else {
            setReadyToSubmit(false)
        }
    }, [newOrg, open])

    // //console.log(newOrg)

    return (
        <div>

            <button className='add-new-contact' onClick={handleClickOpen}>
                <img src={plusIcon} className='add-new-contact-img' alt='Add New Contact' />
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Organization</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter organization name:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Organization name"
                        type="text"
                        fullWidth
                        multiline
                        maxRows={4}
                        variant="standard"
                        onChange={handleFormChange}
                    />
            </DialogContent>
            <DialogActions>
                <Button disabled={readyToSubmit ? false : true} onClick={handleSubmit}>Add Org</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
        </div >
    );
}
