import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from './Slider.module.scss';
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
                    slidesToScroll: 3,
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
        let indexColor = 0
        let items = props.items.map(item => {
            let styleClasses = classes.SliderCard;
            if (props.activeTopico && props.activeTopico === item.id) styleClasses += " " + classes.Active
            return (
                <div key={item.id} className={styleClasses} >
                    <button
                        href="#"
                        onClick={(event) => { props.setActiveTopico(event, item) }}
                        className={classes.SliderCardInfos} style={{ backgroundColor: styles[indexColor++] }}>
                        <h2 className={classes.Title}>{item.title}</h2>
                        <p>{item.body}</p>
                        <footer>
                            <span>{item.position}</span>
                            <span className={classes.Arrow}></span>
                        </footer>
                    </button>
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