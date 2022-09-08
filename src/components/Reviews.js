import React, { Component } from 'react';
import { render } from 'react-dom';
import {Card, CardGroup, CardImg} from 'react-bootstrap/';

import img1 from '../images/review1.png';
import img2 from '../images/review2.png';
import img3 from '../images/review3.png';

class Reviews extends Component{
    render(){
        return(
            <section className="reviews">
                <Card className="card">
                    <CardImg className="card-img" variant="top" src={img1}/>
                    <CardGroup className="card-group">
                        <h3>Loiuse, 34</h3>
                        <p>
                        I stayed here with my husband and three year old daughter. The staff was really nice and helpful.
                        They helped us book the Cave trip and little one had a blast! The waterfalls are beautiful. 
                        Hope to come here next year!
                        </p>
                    </CardGroup>
                </Card>
                <Card className="card">
                    <CardGroup className="card-group">
                        <h3>Leo, 29</h3>
                        <p>
                        Had an amazing time in the cottage! The staff conected me and my wife with a local wine maker for the tasting that welcomed us life a family. 
                        Stayed for two days but will come back for a longer say.
                        </p>
                    </CardGroup>
                    <CardImg className="card-img" variant="top" src={img2}/>
                </Card>
                <Card className="card">
                    <CardImg className="card-img" variant="top" src={img3}/>
                    <CardGroup className="card-group">
                        <h3>Lily</h3>
                        <p>
                        Visited with my best friend and we had an amazing holiday! The cave was awesome even though we didn't see any bats.
                        Also, the trails and the waterfalls were beautiful.
                        </p>
                    </CardGroup>
                </Card>

            </section>
        )
    }

}

export default Reviews;