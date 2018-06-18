//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightCard from '../../global/FlightCard';
//Material
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//css
import './Home.css'
import {getAllFlights} from '../../../services/FlightService'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});


class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            spacing: '16',
            currentFlights : []
        };
    }

    componentWillMount() {
        getAllFlights().then(
            response => {
                this.setState({currentFlights : response.data})
            }
        );
    }


    render() {
        
        const { spacing } = this.state;
        return (
            <div className="Home">
                <Grid container className='GridHome' spacing={16}>
                    <Grid item xs={12}>
                        <Grid container className='GridHomeContainer' spacing={Number(spacing)}>
                            {this.state.currentFlights.map((item,key) => (
                                <Grid key={key} item className='GridHomeFlight'>
                                    <FlightCard key={key} flightImageUrl={item.flightImageUrl}
                                    airline={item.airline} flightDay={item.flightDay} finalCost={item.finalCost} origin={item.origin} destiny={item.destiny}
                                    baseCost={item} idFlight={item} />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
                    
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Home);