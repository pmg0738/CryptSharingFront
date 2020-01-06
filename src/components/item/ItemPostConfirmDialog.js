import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
// Material UI Component
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// Material UI Layout
import Grid from '@material-ui/core/Grid';
// Material UI Icon
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
	avatar: {
		backgroundColor: blue[100],
		color: blue[600],
	},
	buttonContainer: {
		paddingTop: 30,
	},
	card: {
		// backgroundColor: blue[100],
		padding: 20,
		width: 1000,
	},
	postButton: {
		// background: 'linear-gradient(45deg, #F99522 10%, #FBBC05 90%)',
		// background: '#FBBC05',
		background: '#999999',
		'&:hover': {
			backgroundColor: '#FBBC05',
			borderColor: '#FBBC05',
			fontWeight: "bold"
		},
		position: "absolute",
		bottom: 20,
		right: 30,
		paddingLeft: 15,
		paddingRight: 15,
		// width: 80,
	}
});

const ConfirmDialog = (props) => {

	const classes = useStyles();
	// const { onClose, selectedValue, open } = props;
	// const [show, setShow] = useState(props.show);

	
	const handleClose = () => {
		// onClose(selectedValue);
	};

	const postItem = () => {
		props.postItem();
		alert("投稿しました");
		props.close();
	}
	
	const renderFeePerHour = () => {
		if(props.feePerHour===null) {
			return null;
		} else {
			return (
				<ListItem key={1}>
					<ListItemText>{props.feePerHour}円 / 1時間</ListItemText>
				</ListItem>
			);
		}
	}

	const renderFeePerDay = () => {
		if(props.feePerDay===null) {
			return null;
		} else {
			return (
				<ListItem key={1}>
					<ListItemText>{props.feePerDay}円 / 1日</ListItemText>
				</ListItem>
			);
		}
	}

	const renderFeePerWeek = () => {
		if(props.feePerWeek===null) {
			return null;
		} else {
			return (
				<ListItem key={1}>
					<ListItemText>{props.feePerWeek}円 / 1週間</ListItemText>
				</ListItem>
			);
		}
	}

	return (
		<Dialog maxWidth="lg" onClose={handleClose} aria-labelledby="simple-dialog-title" open={props.show}>
			<Card className={classes.card}>
				<DialogTitle id="simple-dialog-title">{props.itemName}</DialogTitle>
				<p>以下の内容で登録してもよろしいですか？</p>
				<Divider />
				<Grid container>
					<Grid item xs={6}>
						<List>
							<p>料金</p>
							{renderFeePerHour()}
							{renderFeePerDay()}
							{renderFeePerWeek()}
							<ListItem key={1}>
								<ListItemText>担保： {props.mortgagedAmount}円</ListItemText>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={6}>
						<List>
							<p>その他</p>
							<ListItem key={1}>
								{props.elseInfo}
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Grid container className={classes.buttonContainer}>
					<Button size="large" onClick={() => props.close()}>キャンセル</Button>
					<Button
						size="large"
						className={classes.postButton}
						startIcon={<CheckCircleIcon />}
						onClick={postItem}
					>投稿する</Button>
				</Grid>
			</Card>
		</Dialog>
	);
}

export default ConfirmDialog;