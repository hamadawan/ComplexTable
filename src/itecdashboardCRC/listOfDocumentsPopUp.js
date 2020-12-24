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

export default function ListOfDocumentPopUp(props) {
    const { itecOpen, handleItecClose, selectedRow } = props;
    // const [open, setOpen] = React.useState(itecOpen);

    const classes = useStyles();
    const [category, setCategory] = React.useState('Select Type of Account');
    const [open, setOpen] = React.useState(false);

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
            <Dialog open={itecOpen} onClose={handleItecClose} maxWidth="sm" fullWidth aria-labelledby="customized-dialog-title">
                <Card>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" className={classes.type4}>
                            {' '}
                            List of Documents
                        </Typography>
                    </CardContent>
                    <DialogContent>   
                        <ul>
                            {
                                
                                selectedRow.attachmentsByCoreteam.map( (path, index) => {
                                    
                                   return <li key={index.toString()}>
                                       Document {index+1} 
                                       <a href={path} style={{textDecoration:'none', margin:'5px'}} target="_blank" rel="noopener noreferrer" download>
                                            <Button variant="outlined" color='primary'>
                                                <i className="fas fa-download"/>
                                                Download
                                            </Button>
                                        </a>

                                   </li>       
                                })
                            }        
                        </ul>
                    </DialogContent>
                    <CardActions className={classes.cardAction}>
                        <div className={classes.button1}>
                            <Button variant="outlined" color="primary" className="txt-capitalize" onClick={handleItecClose}>
                                {' '}
                                Close
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            </Dialog>
        </div>
    );
}
