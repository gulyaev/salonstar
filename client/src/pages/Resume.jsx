import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

const Resume = ({changeHandler, postResumeHandler, resumeForm, loading}, props) => {
    //debugger;
    return (
        <>
            <div>
                <h4>Новое резюме</h4>
            </div>

            <div className="card teal lighten-2">
                    <div className="card-content white-text">
                        <span className="card-title">Новое резюме</span>
                        <div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="sex"
                                    name="sex"
                                    className="yellow-input"
                                    value={resumeForm.sex}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="sex">Пол</label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="yellow-input"
                                    value={resumeForm.city}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="login">Город</label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="about"
                                    name="about"
                                    className="yellow-input"
                                    value={resumeForm.about}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="about">Обо мне</label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="personalinfo"
                                    name="personalinfo"
                                    className="yellow-input"
                                    value={resumeForm.personalinfo}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="personalinfo">Персональная информация</label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="interests"
                                    name="interests"
                                    className="yellow-input"
                                    value={resumeForm.interests}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="interests">Интересы</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button onClick={postResumeHandler} className="btn  light-blue darken-4" disabled={loading}>Продолжить</button>
                    </div>
                </div>

        </>

    );
}

export default Resume;
