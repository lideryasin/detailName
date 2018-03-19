import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render(){
        
        return(
            <div>
            <img src={this.props.user.thumbail}/>
            <h2>{this.props.user.first}</h2>
            <h3>{this.props.user.last}</h3>
            <h3>{this.props.user.age}</h3>
            <h3>{this.props.user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);