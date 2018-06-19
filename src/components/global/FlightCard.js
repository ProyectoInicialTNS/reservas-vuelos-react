import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './css/FlightCard.css'
import 'react-material-layout/dist/react-material-layout.min.css'
import {formatDate} from '../../services/CardService'


class FlightCard extends Component {

    constructor(props){
        super(props);
        this.handleReservarButtonClick = this.handleReservarButtonClick.bind(this);
    }
    

    static propTypes={
        flightImageUrl: PropTypes.string.isRequired,
        airline: PropTypes.string.isRequired,
        flightDay: PropTypes.string.isRequired,
        finalCost: PropTypes.string.isRequired,
        origin: PropTypes.string.isRequired,
        destiny: PropTypes.string.isRequired,
        baseCost: PropTypes.string.isRequired,
        idFlight: PropTypes.string.isRequired,
        openDialog: PropTypes.func.isRequired,
        showButton: PropTypes.bool.isRequired
      };

    handleReservarButtonClick(event,flight){
        this.props.openDialog(flight);
    }

    render(){
        const {flightImageUrl,airline,flightDay,finalCost,origin,destiny,baseCost,idFlight} = this.props;
        const formatedFlightDay = formatDate(flightDay);
        return (
            <div>
                <Card className='FlightCard'>
                    <CardMedia
                        className='FlightCardMedia'
                        image={flightImageUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h1">
                            {airline}
                </Typography>
                        <Typography component="div">
                            <div><b>Fecha: </b>{formatedFlightDay}</div>
                            <div><b>Costo: </b>${finalCost} COP</div>
                            <br/>
                            <div id="divStyle">{origin} - {destiny}</div>
                </Typography>
                    </CardContent>
                    <CardActions data-layout="row" data-layout-align="end">
                        {this.props.showButton && <Button  size="small" color="primary" onClick={(event) => this.handleReservarButtonClick(event,{flightImageUrl,airline,flightDay,finalCost,origin,destiny,baseCost,id: idFlight})}>
                            Reservar
                        </Button>}
                        
                    </CardActions>
                </Card>
            </div>
        );
    }

}

FlightCard.propTypes = {
    //classes: PropTypes.object.isRequired,
};

export default FlightCard;