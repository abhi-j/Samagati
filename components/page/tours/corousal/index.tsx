import React from 'react';
import Slider from 'react-slick';

import styles from './styles.module.scss';

const Item: React.FC<any> = () => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src='./assets/pexels.jpg' alt='' />
                <div>
                    <p>
                        <mark>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that
                        </mark>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Corousal: React.FC<any> = () => {
    const settings = {
        className: 'center',
        // centerMode: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className={styles.container}>
            <Slider {...settings}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Slider>
        </div>
    );
};

export default Corousal;
