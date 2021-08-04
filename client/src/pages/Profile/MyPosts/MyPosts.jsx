import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.state.profilePage.postData.map(post => (<Post message={post.message} likesCount={post.likesCount} />));

    let newPostElement = React.createRef();

    let addPost = ()=>{
		props.addPost();
	}

    let onPostChange=()=>{
        let text = newPostElement.current.value;
		props.onPostChange(text);
    
    }

    return (
        <div className={s.postsBlock}>
            <h4>Мои посты</h4>
            <div>
                <div>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea onChange={onPostChange} ref={newPostElement} id="textarea1" class="materialize-textarea" value={props.state.profilePage.newPostText} ></textarea>
                                    <label for="textarea1">Что у вас нового ?</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <button class="waves-effect waves-light btn" onClick={addPost}>Опубликовать на стене</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;