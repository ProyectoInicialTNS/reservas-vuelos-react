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
import FormReservateDialog from '../../global/FormReservateDialog'

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

    selectedFlight = {};

    constructor(props){
        super(props)
        this.state = {
            spacing: '16',
            currentFlights : [],
            openDialog:false
        };
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    openDialog(flight){
        this.selectedFlight = flight;
        this.setState({openDialog:true})
        //this.FormReservateDialog.openFormReservateDialog();
    }

    closeDialog(){
        this.setState({openDialog:false})
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
                                    <FlightCard showButton={true} key={key} flightImageUrl={item.flightImageUrl}
                                    airline={item.airline} flightDay={item.flightDay} finalCost={item.finalCost} origin={item.origin} destiny={item.destiny}
                                    baseCost={item.baseCost} idFlight={item.id} openDialog={this.openDialog} />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
                </Grid>
                <FormReservateDialog open={this.state.openDialog} closeDialog={this.closeDialog} selectedFlight={this.selectedFlight} />
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Home);