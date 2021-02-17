import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import { InfoDialogContent } from './InfoDialogContent'

const styles = (theme) => ({
        title: {
          padding: theme.spacing(4, 0, 0, 4),
        },
        closeButton: {
          position: 'absolute',
          right: theme.spacing(2),
          top: theme.spacing(2),
          color: theme.palette.grey[500],
        },
      });

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.title} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });

export const InfoDialog = ({isOpen, onClose, titleObj}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
        aria-labelledby="info-dialog-title"
        aria-describedby="info-dialog-description"
      >
        <DialogTitle id="info-dialog-title" onClose={handleClose}>
        <span style={{fontWeight: 'bold'}}>{titleObj.title}</span>
        </DialogTitle>
        <DialogContent>
          <InfoDialogContent titleObj={titleObj}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
