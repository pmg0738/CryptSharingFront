import React from 'react';

// Material UI Component
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
// Material UI Icon
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles(theme => ({
	button: {
		background: 'linear-gradient(45deg, #74E091 20%, #34A853 90%)',
		border: 0,
		borderRadius: 60,
		boxShadow: '0 3px 5px 2px rgba(130, 105, 255, .3)',
		color: 'white',
		fontSize: 20,
		fontWeight: "bold",
		height: 120,
		width: 120,
		padding: '0 30px',
		position: "fixed",
		bottom: 50,
		left: 50,
	},
	root: {
		// height: 380,
		transform: 'translateZ(0px)',
		flexGrow: 1,
	},
	speedDial: {
		color: 'linear-gradient(45deg, #74E091 20%, #34A853 90%)',
		position: 'absolute',
		bottom: 50,
		// left: theme.spacing(1),
		left: 50,
	},
	dial: {
		width: 80,
		height: 80,
	},
	icon: {
		fontSize: 45,
	},
	iconRed: {
		color: "#ea4335",
		fontSize: 45,
	},
	iconBlue: {
		color: "#4285f4",
		fontSize: 45,
	},
	iconGreen: {
		color: "#34a853",
		fontSize: 45,
	},
	iconYellow: {
		color: "#fbbc05",
		fontSize: 45,
	}

}));



export default function ChatAddButton(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [hidden, setHidden] = React.useState(false);

	const handleVisibility = () => {
		setHidden(prevHidden => !prevHidden);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const actions = [
		{
			icon: <GroupIcon className={classes.iconRed} />,
			name: "フォロワー",
			onClick: () => props.openFollowerDialog()
		},
		{
			// icon: <FileCopyIcon className={classes.iconBlue}/>,
			icon: <GroupIcon className={classes.iconBlue}/>,
			name: 'フォロー中',
			onClick: () => props.openFollowingDialog()
		},
		{ 
			// icon: <SaveIcon className={classes.iconGreen}/>,
			icon: <GroupIcon className={classes.iconGreen}/>,
			name: '取引中のユーザー',
			onClick: () => props.openFollowerDialog()
		},
		{
			icon: <GroupIcon className={classes.iconYellow} />,
			// icon: <PrintIcon className={classes.iconYellow} />,
			name: 'リクエストしたユーザー',
			onClick: () => props.openFollowerDialog()
		},
		// {
		// 	icon: <GroupIcon className={classes.icon}/>,
		// 	// icon: <ShareIcon className={classes.icon}/>,
		// 	name: 'Share',
		// 	onClick: () => props.openFollowerDialog()
		// },
		// {
		// 	icon: <GroupIcon className={classes.icon} />,
		// 	// icon: <FavoriteIcon className={classes.icon} />,
		// 	name: 'Like',
		// 	onClick: () => props.openFollowerDialog()
		// },
	  ];
	

	return (
		<div>
		{/* // <div className={classes.root}> */}
			{/* <Button className={classes.button}>
				<Grid direction="row">
					<p className="item-list-add-button-label">新規</p>
					<ChatIcon style={{fontSize: 45, marginTop: -10}}/>
				</Grid>
			</Button> */}
			<SpeedDial
				ariaLabel="SpeedDial openIcon example"
				className={classes.speedDial}
				// className={classes.button}
				hidden={hidden}
				icon={<SpeedDialIcon openIcon={<EditIcon />} />}
				onClose={handleClose}
				onOpen={handleOpen}
				// open={true}
				open={open}
			>
				{actions.map(action => (
					<SpeedDialAction
						className={classes.dial}
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={action.onClick}
					/>
				))}
			</SpeedDial>
		</div>
			
	)
}

const styles = {
	closeButton: {
		backgroundColor: "#4285F4",
		color: "#ffffff",
	}
}