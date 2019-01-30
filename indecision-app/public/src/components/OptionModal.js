import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=>(
        <Modal 
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleModalClose}
        contentLabel = "Selected option"
        >
            <h3>Selected option</h3>
            <h4>{props.selectedOption}</h4>
            <button onClick = {props.handleModalClose}>Close</button>
        </Modal>
    );


export default OptionModal;