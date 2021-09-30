import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import plusIcon from '../../assets/add.png'
import { InputLabel, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { submitContact } from '../../fetchFunctions'


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
    const [selectedOrg, setSelectedOrg] = useState({
        id: -1,
        name: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setNewContact(blankNewContact)
    };

    const handleFormChange = (e) => {


        if (e.target.id) {

            setNewContact({
                ...newContact,
                [e.target.id]: e.target.value
            })
        } else {

            // ////console.log(orgs)
            const id = orgs.find((item) => item.name === e.target.value)
            setNewContact({
                ...newContact,
                'organization_id': id.id
            })

            setSelectedOrg(id)
        }
    }


    const orgArray = orgs.map((item) => <option value={item.name} key={item.id}>{item.name}</option>)


    ////console.log(orgArray)

    const handleSubmit = () => {

        submitContact(newContact)
            .then((data) => {
                if (data.firstname) {
                    reloadContacts()
                } else {
                    ////console.log('looks like we boofed it')
                    ////console.log('TODO: Add error handling for this case')
                }
            })
        setSelectedOrg({ id: -1, name: '' })
        handleClose()
    }

    useEffect(() => {
        if (newContact.firstname !== '' && newContact.lastname !== "") {
            setReadyToSubmit(true)
        } else {
            setReadyToSubmit(false)
        }
    }, [newContact, open])

    //console.log(newContact)

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
                        margin="dense"
                        id="lastname"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        id="note"
                        label="Notes"
                        type="text"
                        fullWidth
                        multiline
                        maxRows={4}
                        variant="standard"
                        onChange={handleFormChange}
                        sx={{
                            marginBottom: '30px'
                        }}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="org-label">Organization</InputLabel>
                        <Select
                            native
                            labelId="org-label"
                            id="organization"
                            defaultValue={selectedOrg ? selectedOrg.id : -1}
                            label="Organization"
                            onChange={handleFormChange}
                            
                        >
                        {orgArray}
                        <option value={-1}>Add Later</option>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button disabled={readyToSubmit ? false : true} onClick={handleSubmit}>Add Contact</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
        </div >
    );
}
