import React, { Component, Fragment } from 'react'
import {getProfile} from "../../../actions/profileAction"
import { connect } from 'react-redux'
import { withRouter,Link } from 'react-router-dom'
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
      <div className='container' style={{padding:"auto"}}>
        <h2 styl={{textAlign: "center"}}>Welcome {name}</h2>
        {this.state.profile ? <h1> I have a profile</h1>: 
        <Fragment>
        <span>create a profile</span><Link className="btn btn-primary" to="/dashboard/addprofile" style={{fontsize:"10px"}}>
        create profile
        </Link>
        
        </Fragment>}
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
   auth: state.auth,
   profile: state.profile
})
export default connect(mapStateToProps, {getProfile})(withRouter(Profile))