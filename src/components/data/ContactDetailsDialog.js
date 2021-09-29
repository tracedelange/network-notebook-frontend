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
import { updateContact, deleteContact } from '../../fetchFunctions'


export default function ContactDetailsDialog({ active, handleClose, data, orgs, reloadContacts }) {

    const [updated, setUpdated] = useState(false)
    const [updatedContact, setUpdatedContact] = useState({})



    const handleFormChange = (e) => {
        setUpdated(true) //maybe add a check to see if updatedContact === Item, in which case updated = false

        setUpdatedContact({
            ...updatedContact,
            [e.target.id]: e.target.value
        })
    }


    const handleUpdateSubmission = () => {

        updateContact(updatedContact, data.id)
        .then(response => {
            if (response.firstname){
                reloadContacts()
            } else {
                //console.log('looks like we boofed it')
                //console.log('TODO: Add error handling for this case')
            }
        })
        handleClose()
    }

    const handleDeleteClick = () => {
        deleteContact(data.id)
        reloadContacts()
    }

    //console.log(data)

    return (
        <div>
            <Dialog open={active} onClose={handleClose} onBackdropClick={() => { handleClose() }}>
                <DialogTitle>Contact Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        View or Edit Contact Details:
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="firstname"
                        label="First Name"
                        type="text"
                        defaultValue={data.firstname}
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        id="lastname"
                        label="Last Name"
                        type="text"
                        defaultValue={data.lastname}
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        id="notes"
                        label="Notes"
                        type="text"
                        defaultValue={data.notes}
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
                            defaultValue={data.organization}
                            label="Organization"
                            onChange={handleFormChange}
                        >

                            <MenuItem value={''}>Add Later</MenuItem>
                        </Select>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button disabled={updated ? false : true} onClick={handleUpdateSubmission}>Update Contact</Button>
                    <Button onClick={handleDeleteClick}>Delete</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
