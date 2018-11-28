import React, { Component } from 'react';
import http from '../../js/api';

class Playlist extends Component {
	componentDidMount () {
		const id = this.props.match.params.id
		const data = {
			id: id,
			offset: '0',
			total: false,
			n: 20,
			limit: 20,
			csrf_token: ''
		};
		http.get('http://localhost:3001/api/playlist', {params: data})
      .then(res => {
        console.log(res.data)
      })
    http.get('http://localhost:3001/api/playlist/comments', {params: Object.assign(data, {rid: id})})
      .then(res => {
        console.log(res.data)
      })
	}
	render () {
		return (
			<div>
				1
			</div>
		)
	}
}

export default Playlist;