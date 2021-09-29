import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import plusIcon from '../../assets/add.png'
import { MenuItem, InputLabel, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import {submitContact} from '../../fetchFunctions'


export default function FormDialog({ data, orgs, reloadContacts }) {

    const blankNewContact = {
        firstname: '',
        lastname: "",
        notes: '',
        organization_id: ''
    }

    const [open, setOpen] = useState(false);
    const [readyToSubmit, setReadyToSubmit] = useState(false)
    const [newContact, setNewContact] = useState(blankNewContact)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewContact(blankNewContact)
    };

    const handleFormChange = (e) => {
        setNewContact({
            ...newContact,
            [e.target.id]: e.target.value
        })
    }

    // console.log(orgs)
    const orgArray = orgs.map((item) => <MenuItem defaultValue='' value={item.id} key={item.id}>{item.name}</MenuItem>)

    const handleSubmit = () => {

        submitContact(newContact)
        .then((data) => {
            if (data.firstname){
                reloadContacts()
            } else {
                console.log('looks like we boofed it')
                console.log('TODO: Add error handling for this case')
            }
        })
        handleClose()
    }

    useEffect(() => {
        if (newContact.firstname !== '' && newContact.lastname !== "") {
            setReadyToSubmit(true)
        } else {
            setReadyToSubmit(false)
        }
    }, [newContact, open])

    return (
        <div>

            <button className='add-new-contact' onClick={handleClickOpen}>
                <img src={plusIcon} className='add-new-contact-img' alt='Add New Contact' />
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Contact</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter contact information:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstname"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastname"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="notes"
                        label="Notes"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                        sx={{
                            marginBottom: '30px'
                        }}
                    />
                    <FormControl fullWidth >
                        <InputLabel id="org-label">Organization</InputLabel>
                        <Select
                            labelId="org-label"
                            id="organization"
                            value={newContact.organization_id}
                            label="Organization"
                            onChange={handleFormChange}
                        >
                            {orgArray}
                            <MenuItem value={''}>Add Later</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button disabled={readyToSubmit ? false : true} onClick={handleSubmit}>Add Contact</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
