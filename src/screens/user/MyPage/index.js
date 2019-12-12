import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMyData } from '../../../redux/actions/user';

import MypageProfile from '../../../components/user/MyPageComponents/MypageProfile';

// マイページ
class Mypage extends React.Component {
	
	componentWillMount = async () => {
		console.log(this.props.store.me);

		if(Object.keys(this.props.store.me).length==0) {
			this.props.fetchMyData();
		}
	}

	render() {
		return (
			<div>
				<MypageProfile
					name="朴民圭"
				/>
			</div>
		)
	}

}


const mapStateProps = (store) => {
	return { store: store };
}

export default connect( mapStateProps, { fetchMyData })(Mypage);
