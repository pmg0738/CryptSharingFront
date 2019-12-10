import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

import MypageProfile from '../../../components/user/MyPageComponents/MypageProfile';

export default class Mypage extends React.Component {

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