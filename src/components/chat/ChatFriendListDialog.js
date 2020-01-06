import React from 'react';

// Material UI Component
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
// import CardHeader from '@material-ui/core/CardHeader';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';



export default function ChatFriendListDialog(props) {
	return (
		<div>
			<Container maxWidth="lg">
				<Card>
					<Button
						variant="contained"
						className="item-post-back-to-list-button"
						size="large"
						style={styles.closeButton}
						onClick={props.close}
						// startIcon={<SettingsBackupRestoreIcon />}
					>閉じる</Button>
				</Card>
			</Container>
		</div>
			
	)
}

const styles = {
	closeButton: {
		backgroundColor: "#4285F4",

	}
}