import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class CedulaForm extends Component {

    static propTypes={
        cedula: PropTypes.number,
        buttonText: PropTypes.string.isRequired,
        handleReservateButton: PropTypes.func.isRequired,
        handleChangeCedula: PropTypes.func.isRequired,
        canShow: PropTypes.bool.isRequired
      };
    render() {
        return (this.props.canShow ? <div>
                <TextField
                    id="number"
                    label="Cedula"
                    value={this.props.cedula}
                    onChange={this.props.handleChangeCedula}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <Button onClick={this.props.handleReservateButton} color="primary">
                    {this.props.buttonText}
            </Button>
            </div>
        :null);
    }
}

export default CedulaForm