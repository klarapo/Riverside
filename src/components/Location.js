import React, { Component } from 'react';
import Title from "./Title";
import {BiLocationPlus} from 'react-icons/bi';
import {GrContactInfo} from 'react-icons/gr'
export default class Location extends Component {
    state = {location: [
        {
            icon: <BiLocationPlus />,
            title: "Stara cesta 7",
            info: '47240 Slunj, Croatia'
        },
        {
            icon: <GrContactInfo />,
            title: "riverside.cottage.cro@gmail.com",
            info: "+385 98 3493 242"
        }

    ]}
    render() {
        return (
            <section className="location">
                <Title title="Info" />
                <div className="location-center">
                    {this.state.location.map((item,index) => 
                    {return <article key={index}className="location">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                        })}
                    </div>
            </section>
        )
    }
}