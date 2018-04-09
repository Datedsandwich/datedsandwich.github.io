import React from 'react';
import {render} from 'react-dom';
import 'sass/main.scss';

import Card from 'components/card';
import Grid from 'components/grid';
import GridItem from 'components/grid-item';

function Application() {
    return (
        <div className="lr-o-site-wrap">
            <Card className="lr-c-card--dark">
                <Grid className="lr-o-grid--spaced">
                    <GridItem className="lr-u-1/3@sm">
                        <img className="lr-u-fill-width" src={require('assets/images/horse_mask.jpg')}></img>
                    </GridItem>
                    <GridItem className="lr-u-1/3@sm">
                        <h1>Hello</h1>
                        <p>I am a Software Developer and Game Developer. I've worked as a Gameplay
                            Programmer, and also as a Full Stack Web Developer. I've used C#, Java, and
                            JavaScript, alongside Unity, XNA/MonoGame, Angularjs, React, and Dropwizard.</p>
                    </GridItem>
                    <GridItem className="lr-u-1/3@sm">
                        <h3>Available For:</h3>
                        <ul>
                            <li>Front-End Web Development</li>
                            <li>Back-End Web Development</li>
                            <li>Gameplay Programming</li>
                            <li>Unity Development</li>
                        </ul>
                    </GridItem>
                </Grid>
            </Card>
        </div>
    );
}

render(
    <Application/>, document.getElementById('container'));