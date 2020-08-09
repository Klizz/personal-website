import React from "react";
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

export default function CustomizedDialogs(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const DialogContent = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiDialogContent);
      
      const DialogActions = withStyles((theme) => ({
        root: {
          margin: 0,
          padding: theme.spacing(1),
        },
      }))(MuiDialogActions);

    return (
      <div className="container centered-content">
        <h1>¡Contáctame!</h1>
        <a href="https://github.com/Klizz">
          <GitHubIcon className="icon" fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/karen-ibarra-662a94111/">
          <LinkedInIcon className="icon" fontSize="large" />
        </a>
        <a href="mailto:klizzy@hotmail.es">
          <MailIcon className="icon" fontSize="large" />
        </a>
        <WhatsAppIcon className="icon" fontSize="large" onClick={handleClickOpen} />

        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <span className="highlight-text">WhatsApp</span>
        </DialogTitle>
        <DialogContent dividers>
        <p className="flow-text">
            Si necesitas contactarme a través de Whatsapp mi número es  <span className="headline bold">826-108-45-96</span>
        </p>
        </DialogContent>
      </Dialog>
      <div className="space"></div>
        <h5>Este sitio fue hecho con</h5>
        <ul>
            <a href="https://reactjs.org/" className="nav" target="_blank"><li>React.js</li></a>
            <a href="https://material-ui.com/" className="nav" target="_blank"><li>Material UI</li></a>
            <a href="https://materializecss.com/" className="nav" target="_blank"><li>Materialize</li></a>
            <li>Diseño: Karen Ibarra</li>
        </ul>
      </div>
    );
}
