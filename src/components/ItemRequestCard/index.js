import React from 'react';

// Material UI Style
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

// Material UI Component
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

// Material UI Icon
import MoreVertIcon from '@material-ui/icons/MoreVert';


// Style
const useStyles = makeStyles({
    card: {
      marginLeft: 5,
      marginRight: 5,
      width: "100%",
    },
  });


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



// 商品リクエストのコンポーネント
export default function ItemRequestCard(props) {

    // スタイリングに使うクラス名
    const classes = useStyles();

    // stateを定義
    const [open, setOpen] = React.useState(false);

    // 詳細画面のダイアログを開く
    const openDetailDialog = () => {
        setOpen(true);
      };

    // 詳細画面のダイアログを閉じる
    const closeDetailDialog = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={openDetailDialog}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: "bold"}}
                        >{props.itemRequest.title}</Typography>
                    <Typography component="p">
                        {props.itemRequest.prefecture} {props.itemRequest.city}
                    </Typography>
                    <Typography component="p">
                        希望日： {props.itemRequest.date}
                    </Typography>
                    <Typography component="p">
                        レンタル期間： {props.itemRequest.rentalTerm}
                    </Typography>
                    <Typography component="p">
                        希望価格： {props.itemRequest.fee + "円"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.itemRequest.hashTags.map(tag => "#" + tag)}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.itemRequest.comment}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">貸し出す</Button>
                <Button size="small" color="primary" onClick={openDetailDialog}>詳細</Button>
            </CardActions>

            {/* 詳細画面 */}
            <Dialog onClose={closeDetailDialog} aria-labelledby="customized-dialog-title" open={open}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe" className={classes.avatar}
                    style={{backgroundColor: "#ff6967"}}
                    >{props.itemRequest.author[0]}</Avatar>}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.itemRequest.author}
                    subheader="September 14, 2016"
                />
                <DialogContent dividers>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: "bold"}}
                        >{props.itemRequest.title}</Typography>
                    <Typography component="p">
                        {props.itemRequest.prefecture} {props.itemRequest.city}
                    </Typography>
                    <Typography component="p">
                        希望日： {props.itemRequest.date}
                    </Typography>
                    <Typography component="p">
                        レンタル期間： {props.itemRequest.rentalTerm}
                    </Typography>
                    <Typography component="p">
                        希望価格： {props.itemRequest.fee + "円"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.itemRequest.hashTags.map(tag => "#" + tag)}
                    </Typography>
                    <Divider/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.itemRequest.comment}
                    </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={closeDetailDialog} color="primary">貸し出す</Button>
                {/* <Button autoFocus onClick={handleClose} color="primary">閉じる</Button> */}
                </DialogActions>
            </Dialog>
        </Card>
    );
}