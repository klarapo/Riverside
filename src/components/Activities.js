import React, { Component } from 'react';
import Title from "./Title";
import {FaHiking} from 'react-icons/fa';
import {GiWaterfall,GiCaveEntrance} from 'react-icons/gi';
import {BiWine} from 'react-icons/bi';
export default class Activities extends Component {
    state = {activities: [
        {
            icon: <GiWaterfall />,
            title: "Rastoke Waterfalls",
            info: 'Spend a day exploring Rastoke Waterfalls, learn how the mills work and drink a cup of coffee admiring the view.'
        },
        {
            icon: <BiWine />,
            title: "Wine tasting",
            info: 'Our locals are experts at making wine. Take an evening and relax while tasting local wine and cheese.'
        },
        {
            icon: <FaHiking />,
            title: "Hiking",
            info: 'There are a lot of hiking routes and walking trails you can take and excercise while enjoying the view.'
        },
        {
            icon: <GiCaveEntrance />,
            title: "Cave exploring",
            info: 'If you are more adventurous and like exploring, you can visit local Barac caves and hang out with bats.'
        }

    ]}
    render() {
        return (
            <section className="activities">
                <Title title="Activities" />
                <div className="activities-center">
                    {this.state.activities.map((item,index) => 
                    {return <article key={index}className="activities">
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
