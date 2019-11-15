import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      margin: 10,
    },
    // media: {
    //   height: 140,
    // },
  });

// const DialogTitle = withStyles(styles)(props => {
//     const { children, classes, onClose, ...other } = props;
//     return (
//         <MuiDialogTitle disableTypography className={classes.root} {...other}>
//         <Typography variant="h6">{children}</Typography>
//         {onClose ? (
//             <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//             <CloseIcon />
//             </IconButton>
//         ) : null}
//         </MuiDialogTitle>
//     );
// });
  


const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    }))(MuiDialogContent);

    const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


export default function ItemRequestCard() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={<Avatar aria-label="recipe" className={classes.avatar}
                style={{backgroundColor: "#ff6967"}}
                >R</Avatar>}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardActionArea onClick={handleOpen}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: "bold"}}
                        >自転車</Typography>
                    <Typography component="p">
                        福岡県 飯塚市
                    </Typography>
                    <Typography component="p">
                        希望日： 2019/11/15
                    </Typography>
                    <Typography component="p">
                        レンタル期間： 1週間
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        #自転車 #チャリ
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">貸し出す</Button>
                <Button size="small" color="primary" onClick={handleOpen}>詳細</Button>
            </CardActions>
            {/* <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}
                        style={{backgroundColor: "#ff6967"}}
                    >
                        R
                    </Avatar>}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            /> */}
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Modal title
                </DialogTitle> */}
                <DialogContent dividers>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: "bold"}}
                        >自転車</Typography>
                    <Typography component="p">
                        福岡県 飯塚市
                    </Typography>
                    <Typography component="p">
                        希望日： 2019/11/15
                    </Typography>
                    <Typography component="p">
                        レンタル期間： 1週間
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        #自転車 #チャリ
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">貸し出す</Button>
                <Button autoFocus onClick={handleClose} color="primary">閉じる</Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}