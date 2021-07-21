import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.state.postData.map(post => (<Post message={post.message} likesCount={post.likesCount} />));

    return (
        <div className={s.postsBlock}>
            <h4>My posts</h4>
            <div>
                <div>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                                    <label for="textarea1">Что у вас нового ?</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                <a class="waves-effect waves-light btn">Опубликовать на стене</a>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;