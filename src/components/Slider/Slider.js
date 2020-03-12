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
        infinite: false,
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
            const color = indexColor++
            return (
                <div key={item.id} className={styleClasses} >
                    <div
                        href="#"
                        className={classes.SliderCardInfos} style={{ backgroundColor: styles[color] }}>
                        <h2 className={classes.Title}>{item.title}</h2>
                        <p>{item.body}</p>

                        <a className={classes.BtnLink}
                            data-color={styles[color]}
                            href="#nulllink"
                            onClick={(event) => { props.setActiveTopico(event, item) }}>
                            {(props.activeTopico && props.activeTopico === item.id) ? 'Fechar' : 'Matérias'}
                        </a>
                    </div>
                </div>
            )
        })
        slider = <Slider {...settings}>
            {items}
        </Slider>
    }
    return (
        <div className="MainSlider container">
            <h1>Tópicos</h1>
            <div className={classes.Slider}>
                {slider}
            </div>

        </div>
    )
}

export default slider;