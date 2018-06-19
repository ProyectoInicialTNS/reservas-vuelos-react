import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import CedulaForm from './CedulaForm';
import UserService from '../../services/UserService'

export default class FormReservateDialog extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      esMayorEdad : false,
      cedula: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeCedula = this.handleChangeCedula.bind(this)
    this.handleReservateButton = this.handleReservateButton.bind(this);
  }

  static propTypes={
    open: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    selectedFlight : PropTypes.object.isRequired
  };

  handleChange(event){
    this.setState({esMayorEdad:event.target.checked})
  }

  handleReservateButton(){
    this.props.closeDialog();
    UserService.reservateFlight(this.state.cedula,this.props.selectedFlight).then(
      response => {
        response.data ? alert("Reservacion realizada con exito") : alert("No se puede realizar reservacion");
      }
    )
    
  }

  handleChangeCedula(event){
    this.setState({cedula:event.target.value})
  }
  

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.closeDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Reservar vuelo</DialogTitle>
          <DialogContent>

            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.esMayorEdad}
                    onChange={this.handleChange}
                  />
                }
                label="Eres mayor de edad?"
              />
              </FormGroup >
                <CedulaForm canShow={this.state.esMayorEdad} cedula={this.state.cedula} buttonText="Generar reserva" handleReservateButton={this.handleReservateButton} handleChangeCedula={this.handleChangeCedula}/>
          </DialogContent>
          
        </Dialog>
      </div>
    );
  }
}