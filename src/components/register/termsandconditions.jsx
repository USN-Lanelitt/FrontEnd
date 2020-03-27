import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


export default function BrukerVilkar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
        <Typography variant="outlined" color="primary" onClick={handleClickOpen}>
          Jeg godtar brukervilkårene
        </Typography>
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Lånelitt Brukervilkår"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography>
                1."Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
                modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor
                e eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa q
                ui officia deserunt mollit anim id est laborum."
              </Typography>
              <Typography>
                2. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
                r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol
                or in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exce
                pteur sint occaecat cupidatat non proident, sunt in culpa qu
                i officia deserunt mollit anim id est laborum."
              </Typography>
              <Typography>
                3. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
                o eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi
                nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co
                nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugi
                at nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cul
                pa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <Typography>
                4."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit
                ation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre
                henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca
                t cupidatat non proident, sunt in culpa qu
                i officia deserunt mollit anim id est laborum."
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Ikke godta
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Godta
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}
