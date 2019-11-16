import React from 'react';

// Material UI Style
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

// Material UI Component
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';

// Material UI Icon
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// My Component
import ItemRequestCard from '../../components/ItemRequestCard';



const useStyles = makeStyles(theme => ({
	fab: {
		height: 80,
		width:  80,
		margin: theme.spacing(1),
		position: "fixed",
		bottom: 50,
		right: 50,
	},
	root: {
		color: '#ffffff',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		overflow: 'hidden',
	},
		gridList: {
		width: "80%",
	},
		icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
	postDialog: {
		minWidth: "80%"
	}
}));


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


// 商品リクエストの一覧
export default function ItemRequestList() {

	// スタイリングに使うクラス名
	const classes = useStyles();

	// stateを定義
	const [open, setOpen] = React.useState(false);

	// 投稿画面のダイアログを開く
	const openPostDialog = () => {
		setOpen(true);
	};

	// 投稿画面のダイアログを閉じる
	const closePostDialog = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<GridList cellHeight={260} className={classes.gridList}>
				<GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
					<ListSubheader component="div" style={{color: "#ffffff", fontSize: 24}}>REQUESTS</ListSubheader>
				</GridListTile>
				{itemRequests.map(itemRequest => (
					<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
						<ItemRequestCard itemRequest={itemRequest} />
					</Grid>
				))}
			</GridList>
			<Fab color="primary" aria-label="add" className={classes.fab} onClick={openPostDialog}>
				<AddIcon />
			</Fab>
			{/* 投稿画面 */}
			<Dialog className={classes.postDialog} onClose={closePostDialog} aria-labelledby="customized-dialog-title" open={open}>
				<CardHeader
					avatar={<Avatar aria-label="recipe" className={classes.avatar}
					style={{backgroundColor: "#ff6967"}}
					>H</Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Hayato Koba"
					subheader="September 14, 2016"
				/>
				<DialogContent dividers>
					{/* ここにフォームを書く */}
				</DialogContent>
				<DialogActions>
				<Button autoFocus onClick={() => console.log("POST")} color="primary">投稿する</Button>
				<Button autoFocus onClick={closePostDialog} color="primary">閉じる</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};


const itemRequests = [
    {
        title: '自転車',
        date: '2020-11-30',
        author: 'Hayato Koba',
        prefecture: '福岡県',
        city: '福岡市',
        rentalTerm: '3日',
        fee: 300,
        hashTags: ['自転車', 'チャリ', 'GIANT'],
        comment: '自転車貸して下さい!!'
    },
    {
        title: 'たこ焼き機',
        date: '2019-12-24',
        author: 'Park Mingu',
        prefecture: '福岡県',
        city: '飯塚市',
        rentalTerm: '1日',
        fee: 400,
        hashTags: ['タコパ', 'たこ焼き'],
        comment: '深夜一人タコパしたい!!'
    },
    {
        title: '自転車',
        date: '2020-11-30',
        author: 'Ozaki Ryuya',
        prefecture: '宮崎県',
        city: '',
        rentalTerm: '3日',
        fee: 300,
        hashTags: ['自転車', 'チャリ', 'GIANT'],
        comment: '自転車貸して下さい!!'
    },
    {
        title: 'たこ焼き機',
        date: '2019-12-24',
        author: 'Maeno Yushi',
        prefecture: '鹿児島県',
        city: '',
        rentalTerm: '1日',
        fee: 400,
        hashTags: ['タコパ', 'たこ焼き'],
        comment: '深夜一人タコパしたい!!'
    },
    {
        title: '自転車',
        date: '2020-11-30',
        author: 'Hayato Koba',
        prefecture: '福岡県',
        city: '福岡市',
        rentalTerm: '3日',
        fee: 300,
        hashTags: ['自転車', 'チャリ', 'GIANT'],
        comment: '自転車貸して下さい!!'
    },
    {
        title: 'たこ焼き機',
        date: '2019-12-24',
        author: 'Park Mingu',
        prefecture: '福岡県',
        city: '飯塚市',
        rentalTerm: '1日',
        fee: 400,
        hashTags: ['タコパ', 'たこ焼き'],
        comment: '深夜一人タコパしたい!!'
    },
    {
        title: '自転車',
        date: '2020-11-30',
        author: 'Ozaki Ryuya',
        prefecture: '宮崎県',
        city: '',
        rentalTerm: '3日',
        fee: 300,
        hashTags: ['自転車', 'チャリ', 'GIANT'],
        comment: '自転車貸して下さい!!'
    },
    {
        title: 'たこ焼き機',
        date: '2019-12-24',
        author: 'Maeno Yushi',
        prefecture: '鹿児島県',
        city: '',
        rentalTerm: '1日',
        fee: 400,
        hashTags: ['タコパ', 'たこ焼き'],
        comment: '深夜一人タコパしたい!!'
    },
    {
        title: '自転車',
        date: '2020-11-30',
        author: 'Hayato Koba',
        prefecture: '福岡県',
        city: '福岡市',
        rentalTerm: '3日',
        fee: 300,
        hashTags: ['自転車', 'チャリ', 'GIANT'],
        comment: '自転車貸して下さい!!'
    },
    {
        title: 'たこ焼き機',
        date: '2019-12-24',
        author: 'Park Mingu',
        prefecture: '福岡県',
        city: '飯塚市',
        rentalTerm: '1日',
        fee: 400,
        hashTags: ['タコパ', 'たこ焼き'],
        comment: '深夜一人タコパしたい!!'
    },
    {
        title: '自転車',
        date: '2020-11-30',
        author: 'Ozaki Ryuya',
        prefecture: '宮崎県',
        city: '',
        rentalTerm: '3日',
        fee: 300,
        hashTags: ['自転車', 'チャリ', 'GIANT'],
        comment: '自転車貸して下さい!!'
    },
    {
        title: 'たこ焼き機',
        date: '2019-12-24',
        author: 'Maeno Yushi',
        prefecture: '鹿児島県',
        city: '',
        rentalTerm: '1日',
        fee: 400,
        hashTags: ['タコパ', 'たこ焼き'],
        comment: '深夜一人タコパしたい!!'
    },
    {
        title: '自転車',
        date: '2020-11-30',
        author: 'Hayato Koba',
        prefecture: '福岡県',
        city: '福岡市',
        rentalTerm: '3日',
        fee: 300,
        hashTags: ['自転車', 'チャリ', 'GIANT'],
        comment: '自転車貸して下さい!!'
    },
    {
        title: 'たこ焼き機',
        date: '2019-12-24',
        author: 'Park Mingu',
        prefecture: '福岡県',
        city: '飯塚市',
        rentalTerm: '1日',
        fee: 400,
        hashTags: ['タコパ', 'たこ焼き'],
        comment: '深夜一人タコパしたい!!'
    },
    {
        title: '自転車',
        date: '2020-11-30',
        author: 'Ozaki Ryuya',
        prefecture: '宮崎県',
        city: '',
        rentalTerm: '3日',
        fee: 300,
        hashTags: ['自転車', 'チャリ', 'GIANT'],
        comment: '自転車貸して下さい!!'
    },
    {
        title: 'たこ焼き機',
        date: '2019-12-24',
        author: 'Maeno Yushi',
        prefecture: '鹿児島県',
        city: '',
        rentalTerm: '1日',
        fee: 400,
        hashTags: ['タコパ', 'たこ焼き'],
        comment: '深夜一人タコパしたい!!'
    },
];
