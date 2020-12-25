import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Card, FormControl, InputLabel, Select, CardContent, Typography, TextField, CardActions } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import './styles.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 500,
        
    },
    bottomLine: {
        '&:before': {
            borderBottom: '1px solid #ccc !important',
        },
        fontSize: '16px',
        paddingTop: '15px',
        
    },
    inLabel: {
        fontSize: '1.5rem',
        letterSpacing: '0.09rem',
        color: '#000000',
    },
    cardContent: {
        paddingLeft: '24px',
        bottom:'10px',
        
       
    },
    type4: {
        margin: theme.spacing(2),
        fontSize: '1.5rem',
        fontFamily: 'Rubik',
        fontWeight: '500',
    },
    cardAction: {
        marginLeft: '30px',
        marginBottom:'30px',
    },
    button1: {
        marginRight: '25px',
    },
    button2: {
        margin: '0px',
    },
}));

export default function RemarkPopUp(props) {
    const { RemarkOpen, handleRemarkClose ,addRemarks, selectedRow } = props;
    // const [open, setOpen] = React.useState(RemarkOpen);

    const classes = useStyles();
    const [category, setCategory] = React.useState('Select Type of Account');
    const [open, setOpen] = React.useState(false);
    const [remarks, setRemarks] = React.useState('')

    // On Select
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    // controlled Select
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Dialog open={RemarkOpen} onClose={handleRemarkClose} maxWidth="sm" fullWidth aria-labelledby="customized-dialog-title">
                <Card>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" className={classes.type4}>
                            {' '}
                            Add Review
                        </Typography>
                    </CardContent>

                    <DialogContent>                        
                        <FormControl className={classes.formControl}>
                            
                            <TextField
                                id="relevence-remarks"
                                multiline
                                rows={5}
                                placeholder="Enter Your Remark"
                                InputProps={{
                                    classes: { root: classes.bottomLine },
                                }}
                                style={{ paddingTop: '15px' }}
                                value={remarks}
                                onChange={(event)=>setRemarks(event.target.value)}
                            />
                        </FormControl>                      
                    </DialogContent>
                    <CardActions className={classes.cardAction}>
                        <div className={classes.button1}>
                            <Button variant="outlined" color="primary" className="txt-capitalize" onClick={handleRemarkClose}>
                                {' '}
                                Cancel
                            </Button>
                        </div>
                        <div className={classes.button2}>
                            <Button variant="outlined" color="primary" 
                                onClick={()=>{ addRemarks(selectedRow.questionId,remarks);handleRemarkClose()}}
                                className="txt-capitalize">
                                {' '}
                                Save{' '}
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            </Dialog>
        </div>
    );
}
