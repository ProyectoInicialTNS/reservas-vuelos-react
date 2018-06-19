//Dependencies
import React, {Component} from 'react'
import CedulaForm from '../../global/CedulaForm'

import UserService from '../../../services/UserService'
import FlightCard from '../../global/FlightCard';
//Material
import Grid from '@material-ui/core/Grid';

class Reservas extends Component {
    constructor (props){
        super(props)
        this.state = {
            spacing: '16',
            cedula : 0,
            flightList : []
        }
        this.handleChangeCedula = this.handleChangeCedula.bind(this);
        this.handleSearchButton = this.handleSearchButton.bind(this);
    }

    handleChangeCedula(event){
        this.setState({cedula:event.target.value})
      }

    handleSearchButton(){
        UserService.getAllUserFlights(this.state.cedula).then(
            response => {
                this.setState({flightList: response.data})
            }
        )
    }

    render(){
        const { spacing } = this.state;
        return (
            <div className="Reservas" >
                <div data-layout="row" data-layout-align="center"> <CedulaForm canShow={true} cedula={this.state.cedula} buttonText="Consultar vuelos" handleReservateButton={this.handleSearchButton} handleChangeCedula={this.handleChangeCedula} /></div>
                <Grid container className='GridHome' spacing={16}>
                    <Grid item xs={12}>
                        <Grid container className='GridHomeContainer' spacing={Number(spacing)}>
                            {this.state.flightList.map((item,key) => (
                                <Grid key={key} item className='GridHomeFlight'>
                                    <FlightCard showButton={false} key={key} flightImageUrl={item.flightImageUrl}
                                    airline={item.airline} flightDay={item.flightDay} finalCost={item.finalCost} origin={item.origin} destiny={item.destiny}
                                    baseCost={item.baseCost} idFlight={item.id} openDialog={this.openDialog} />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
                </Grid>


            </div>
        );
    }
}

export default Reservas;