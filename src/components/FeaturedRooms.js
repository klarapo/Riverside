import React, { Component } from 'react';
import Title from "./Title";
import Featured1 from '../images/room-1.jpeg';
import Featured2 from '../images/room-3.jpeg';
import Featured3 from '../images/room-4.jpeg';

export default class FeaturedRooms extends Component {
    state = {featuredrooms: [
        {
            image: <a href='/'> <img src={Featured1} alt="Room Eva" width="300px" height="200px" /></a>,
            title: "Room Eva",
        },
        {
            image: <a href='/'> <img src={Featured2} alt="Room Alberto" width="300px" height="200px" /></a>,
            title: "Room Alberto",
        },
        {
            image: <a href='/'> <img src={Featured3} alt="Room Nouise" width="300px" height="200px" /></a>,
            title: "Room Nouise",
        },

    ]}
    render() {
        return (
            <section className="featuredrooms">
                <Title title="Featured Rooms" />
                <div className="featuredrooms-center">
                    {this.state.featuredrooms.map((item,index) => 
                    {return <article key={index}className="featuredrooms">
                        <span>{item.image}</span>
                        <h6>{item.title}</h6>
                        </article>
                        })}
                    </div>
            </section>
        )
    }
}