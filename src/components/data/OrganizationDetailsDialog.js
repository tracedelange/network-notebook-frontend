import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { updateOrg, deleteOrg } from '../../fetchFunctions'


export default function OrganizationDetailsDialog({ active, userToken, handleClose, data, orgs, reloadOrgs }) {

    const [updated, setUpdated] = useState(false)
    const [updatedOrganization, setUpdatedOrganization] = useState({})


    const handleFormChange = (e) => {
        setUpdated(true) //maybe add a check to see if updatedContact === Item, in which case updated = false

        setUpdatedOrganization({
            name: e.target.value
        })
    }

    const handleUpdateSubmission = () => {

        // //console.log(data.id)

        updateOrg(updatedOrganization, data.id, userToken)
        .then(response => {
            if (response.name){
                // //console.log('that worked')
                reloadOrgs(userToken)
            } else {
                //console.log('looks like we boofed it')
                //console.log('TODO: Add error handling for this case')
            }
        })
        handleClose()

        // //console.log(updatedOrganization)
    }

    const handleDeleteClick = () => {
        deleteOrg(data.id, userToken)
        .then(()=>{
            reloadOrgs(userToken)
            handleClose()
        })
    }

    // //console.log(updatedContact)

    return (
        <div>
            <Dialog open={active} onClose={handleClose} onBackdropClick={() => { handleClose() }}>
                <DialogTitle>Contact Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit or Delete Organization:
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Organization Name"
                        type="text"
                        defaultValue={data.name}
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />

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
