import React from 'react';
import ImageAvatars from '../Avatar/ImageAvatars';

const ProfileInfo = () => {

    return (
        <>
        <div class="col s12 m8 offset-m2 l12 ">
                <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                            <div class="col s2">
                                <ImageAvatars/>
                                {//<!-- notice the "circle" class --></img>
                                }
                            </div>
                            <div class="col s10">
                                <span class="black-text">
                                    This is a square image. Add the "circle" class to it to make it appear circular.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ProfileInfo;