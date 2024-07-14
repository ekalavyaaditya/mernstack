import React, { Component } from 'react'
import {getProfile} from "../../../actions/profileAction"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import {decodeUser} from "../../../utill" 
class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            profile: null,
        }
    }
    componentDidMount(){
        this.props.getProfile(decodeUser().user.id);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.profile.profile);
    }
    render() {
        const {name} =this.props.auth.user;
    return (
      <div className='container'>
        <h2>Welcome {name}</h2>
        {this.state.profile ? <h1> I have a profile</h1>: <h1>create a profile</h1>}
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
   auth: state.auth,
   profile: state.profile
})
export default connect(mapStateToProps, {getProfile})(withRouter(Profile))