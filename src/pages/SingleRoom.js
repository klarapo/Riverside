import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import { Link } from "react-router-dom";
import StyledHero from "../components/Hero";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state ={
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    
    render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                <h3>No room by this name.</h3>
                <Link to='/rooms' className='btn-primary'>Back to rooms.</Link>
            </div>
        }
        return (
            <div>
                hello single room here {room.name}
            </div>
        )
    }
    
}
