import React, {useState}  from 'react';
import {Modal,Button} from 'react-bootstrap';
import banner from './../modal-banner.jpg';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal className='offer-modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img className='img-fluid' src={banner} alt="offer banner"></img>
        </Modal.Body>
      </Modal>
    );
  }
  
  function Offer() {
    const [modalShow, setModalShow] = useState(true);
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default Offer;
  