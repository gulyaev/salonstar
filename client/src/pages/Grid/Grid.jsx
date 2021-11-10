import React from 'react';
import s from './Grid.module.css';

const Grid = (props) => {
    return (
        <>
            <div className={s.wrapper}>
                <header className={s.header}>
                    <a href="" className={s.header__logo}></a>
                    <div className={s.header__menu}>
                        <ul className={s.header__list}>
                            <li>
                                <a href="" className={s.header__link}>Пункт меню</a>
                            </li>
                            <li>
                                <a href="" className={s.header__link}>Пункт меню</a>
                            </li>
                            <li>
                                <a href="" className={s.header__link}>Пункт меню</a>
                            </li>
                            <li>
                                <a href="" className={s.header__link}>Пункт меню</a>
                            </li>
                        </ul>
                        <div className={s.header__burger}>
                            <span></span>
                        </div>
                    </div>
                </header>

                <main className={s.main}>
                    
                    <aside className={s.sidebar}>
                        <div className={s.sidebar__menu}>
                            <ul className={s.sidebar__list}>
                                <li>
                                    <a href="" className={s.sidebar__link}>Пункт меню</a>
                                </li>
                                <li>
                                    <a href="" className={s.sidebar__link}>Пункт меню</a>
                                </li>
                                <li>
                                    <a href="" className={s.sidebar__link}>Пункт меню</a>
                                </li>
                                <li>
                                    <a href="" className={s.sidebar__link}>Пункт меню</a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <section className={s.content}>
                        <h3 className={s.content__title}>GRID Layout - Практика</h3>
                        <section className={s.content__gallery + ' ' + s.gallery}>
                            <h4 className={s.gallery__title}>Галерея</h4>
                            <div className={s.gallery__items}>
                                <div className={s.gallery__item + ' ' + s.gallery__item_big}>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item}>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item}>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item}>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item }>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item }>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item}>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item + ' ' + s.gallery__item_big}>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item}>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className={s.gallery__item}>
                                    <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                            </div>
                        </section>
                        <section className={s.content__products + ' ' + s.products}>
                            <h3 className={s.products__title}>Товары</h3>
                            <div className={s.products__items}>
                                <div className={s.products__item}>
                                    <a href="" className={s.products__image}>
                                        <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    </a>
                                    <a href="" className={s.products__name}>
                                        Футболка "Живи, а работай в свободное время"
                                    </a>
                                    <a href="" className={s.products__button}>
                                        Купить
                                    </a>
                                </div>
                                <div className={s.products__item}>
                                    <a href="" className={s.products__image}>
                                        <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    </a>
                                    <a href="" className={s.products__name}>
                                        Футболка "Живи, а работай в свободное время" ывафыва ыфва фыв ыва фыв фываф авфывафыв  выаф ыа
                                    </a>
                                    <a href="" className={s.products__button}>
                                        Купить
                                    </a>
                                </div>
                                <div className={s.products__item}>
                                    <a href="" className={s.products__image}>
                                        <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    </a>
                                    <a href="" className={s.products__name}>
                                        Футболка "Живи, а работай в свободное время"
                                    </a>
                                    <a href="" className={s.products__button}>
                                        Купить
                                    </a>
                                </div>
                                <div className={s.products__item}>
                                    <a href="" className={s.products__image}>
                                        <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    </a>
                                    <a href="" className={s.products__name}>
                                        Футболка "Живи, а работай в свободное время"
                                    </a>
                                    <a href="" className={s.products__button}>
                                        Купить
                                    </a>
                                </div>
                                <div className={s.products__item}>
                                    <a href="" className={s.products__image}>
                                        <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    </a>
                                    <a href="" className={s.products__name}>
                                        Футболка "Живи, а работай в свободное время"
                                    </a>
                                    <a href="" className={s.products__button}>
                                        Купить
                                    </a>
                                </div>
                                <div className={s.products__item}>
                                    <a href="" className={s.products__image}>
                                        <img src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                    </a>
                                    <a href="" className={s.products__name}>
                                        Футболка "Живи, а работай в свободное время"
                                    </a>
                                    <a href="" className={s.products__button}>
                                        Купить
                                    </a>
                                </div>
                            </div>
                        </section>
                    </section>
                </main>
                
                <footer className={s.footer}>
                    <div className={s.footer__copy}>
                        Copy, 2020
                    </div>
                    <div className={s.footer__text}>
                        Lorem ipsum dolor sit amet.
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Grid;