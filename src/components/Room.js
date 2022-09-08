import React, { Component } from 'react';
import Featured1 from '../images/room-1.jpeg';
import Featured2 from '../images/room-3.jpeg';
import Featured3 from '../images/room-4.jpeg';
import Featured4 from '../images/room-7.jpeg';
import Featured5 from '../images/room-8.jpeg';
import Featured6 from '../images/room-12.jpeg';
import Title from "./Title";

export default class Room extends Component {
    state = {room: [
        {
            image: <img src={Featured1} alt="Room Eva" width="300px" height="200px" />,
            title: "Room Eva",
            info: "A minimalist room with soft pastel colors. Air conditioning. Extra bed. ",
            price: "35eur/night",
        },
        {
            image: <img src={Featured2} alt="Room Alberto" width="300px" height="200px" />,
            title: "Room Alberto",
            info: "Dark and rich wood. Air conditioning. Hot tub. ",
            price: "65eur/night",
        },
        {
            image: <img src={Featured3} alt="Room Nouise" width="300px" height="200px" />,
            title: "Room Nouise",
            info: "Rustical room with a view of the near by woods. Air conditioning. Balcony. ",
            price: "45eur/night",
        },
        {
            image: <img src={Featured4} alt="Room Lucia" width="300px" height="200px" />,
            title: "Room Lucia",
            info: "You'll feel like a royalty in this room. Air conditioning. Hot tub. ",
            price: "46eur/night",
        },
        {
            image: <img src={Featured5} alt="Room Ivano" width="300px" height="200px" />,
            title: "Room Ivano",
            info: "Rustic room with a balcony. Ceiling fan. ",
            price: "35eur/night",
        },
        {
            image: <img src={Featured6} alt="Room River" width="300px" height="200px" />,
            title: "Room River",
            info: "A minimalist room with a view of near by woods. Balcony with out door hot tub. Air conditioning ",
            price: "50eur/night",
        },

    ]}
    render() {
        return (
            <section className="room">
            <Title title="Interested in any rooms? Contact us." />
                <div className="room-center">
                    {this.state.room.map((item,index) => 
                    {return <article key={index}className="room">
                        <span>{item.image}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        <p>{item.price}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}