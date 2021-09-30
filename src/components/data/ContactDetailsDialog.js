import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { updateContact, deleteContact } from '../../fetchFunctions'


export default function ContactDetailsDialog({ active, handleClose, data, orgs, reloadContacts }) {

    const [updated, setUpdated] = useState(false)
    const [updatedContact, setUpdatedContact] = useState({})
    // const [selectedOrg, setSelectedOrg] = useState({})
    const [orgList, setOrgList] = useState([])

    const handleFormChange = (e) => {
        setUpdated(true) //maybe add a check to see if updatedContact === Item, in which case updated = false

        ////console.log(e.target.id)
        setUpdatedContact({
            ...updatedContact,
            [e.target.id]: e.target.value
        })
    }

    useEffect(() => {

        if (Array.isArray(orgs)) {
            setOrgList(orgs.map((item) => <option key={item.id} value={item.id}>{item.name}</option>))
        }

    }, [orgs])


    const handleUpdateSubmission = () => {

        let contactBody = {
            ...updatedContact,
            'organization_id': updatedContact.organization
        }

        delete contactBody.organization

        updateContact(contactBody, data.id)
        .then(response => {
            if (response.firstname){
                //console.log('that worked')
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
                        id="note"
                        label="Notes"
                        type="text"
                        defaultValue={data.note}
                        multiline
                        maxRows={4}
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
                            native
                            labelId="org-label"
                            id="organization"
                            // defaultValue={data.organization}
                            label="Organization"
                            onChange={handleFormChange}
                            defaultValue={data.organization ? data.organization.id : -1}
                            
                        >
                            {orgList}
                            <option value={-1}>Add Later</option>
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
