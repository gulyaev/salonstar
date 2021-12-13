import {addPostActionCreator, 
		onPostChangeActionCreator,
		//addPostThunkCreator,
		//onPostChangeThunkCreator
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
		newPostText: state.profilePage.newPostText,
		profile: state.profilePage.profile,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: ()=>{dispatch(addPostActionCreator());},
		onPostChange: (text)=>{dispatch(onPostChangeActionCreator(text));}

		//addPost: ()=>{addPostThunkCreator()},
		//onPostChange: (text)=>{onPostChangeThunkCreator(text)}
	}
}


//const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts);

export default MyPostsContainer;