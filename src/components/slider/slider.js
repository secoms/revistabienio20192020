import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from './slider.module.scss';
const styles = [
    "#945b7c",
    "#056663",
    "#1d81a1",
    "#e55c5c",
    "#f09333",
    "#128848",
]

const slider = props => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let slider = null
    if (props.items) {
        let items = Object.keys(props.items).map(key => {
            return (
                <div key={props.items[key].id} className={classes.SliderCard} >
                    <div tabIndex="0" onClick={(event, key) => props.setActiveTopico(event, key)} className={classes.SliderCardInfos} style={{ backgroundColor: styles[key] }} >
                        <h2 className={classes.Title}>{props.items[key].title}</h2>
                        <p>{props.items[key].body}</p>
                        <footer>
                            <span>{props.items[key].position}</span>
                            <span className={classes.Arrow}></span>
                        </footer>
                    </div>
                </div>
            )
        })
        slider = <Slider {...settings}>
            {items}
        </Slider>
    }
    return (
        <div className=" container">
            <h1>Tópicos</h1>
            <div className={classes.Slider}>
                {slider}
            </div>

        </div>
    )
}

export default slider;