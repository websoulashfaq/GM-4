import React from 'react'
import './RequestDetails.css'
import imagereq1 from '../../../assets/images/Paid Request Organizer Details/262886-pubg-game-wallpaper (1).jpg'
import paidimg1 from '../../../assets/images/Paid Request Organizer Details/paid-stamp-shows-invoice-payment-confirmation-WWWD4P.jpg'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 343,
  height: 170,
  bgcolor: 'background.paper',
  border: '2px solid #ffff',
  boxShadow: 24,
  p: 4,
};
//useState for modals
const RequestDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);


  const [oopen, setOopen] = React.useState(false);
  const handleOopen = () => setOopen(true);
  const handleCclose = () => setOopen(false);
  const [ooopen, setOoopen] = React.useState(false);
  const handleOoopen = () => setOoopen(true);
  const handleCcclose = () => setOoopen(false);
  const [oooopen, setOooopen] = React.useState(false);
  const handleOooopen = () => setOooopen(true);
  const handleCccclose = () => setOooopen(false);
  return (
    <div className='requestDetailsMain_wrapper' style={{maxWidth: "100%"}}>
      {/* This div is for wrapping the heading */}
      <div className='requestDetailsMainheading'>
        <div className='requestDetails_emptyheadingdiv'>

        </div>
        <h1>PAID REQUEST ORGANIZER DETAILS</h1>
      </div>
      <div className='requestDetailsSubheading'>
        <h2>Organizer Name</h2>
      </div>
      <div className='promotion_Image_heading'>
        <h3>Promotion Image</h3>
      </div>
      {/* this div if for the image grid inside this flex box their is 2 flexbox inside it there are 2 div inside those flexbox */}
      <div className='requestDetails_Image_Grid'>
        <div className='requestDetails_Image_Grid_Innerflex'>
          <div className='requestDetails_Image_Grid_Innerdiv'>
            <Button onClick={handleOpen}><img src={imagereq1} alt="" /></Button>
          </div>
          <div className='requestDetails_Image_Grid_Innerdiv'>
            <Button onClick={handleOpen1}><img src={imagereq1} alt="" /></Button>
          </div>
        </div>
        <div className='requestDetails_Image_Grid_Innerflex'>
          <div className='requestDetails_Image_Grid_Innerdiv'>
            <Button onClick={handleOpen2}><img src={imagereq1} alt="" /></Button>
          </div>
          <div className='requestDetails_Image_Grid_Innerdiv'>
            <Button onClick={handleOpen3}><img src={imagereq1} alt="" /></Button>
          </div>
        </div>
      </div>
      <div className='requestDetailsbannerImage_heading'>
        <h3>Banner Image</h3>
      </div>
      <div className='requestDetails_bannerImage'>
        <img src={imagereq1} alt="" />
      </div>
      <div className='requestDetailsPaymentImage_heading'>
        <h3>Payment Image</h3>
      </div>
      <div className='requestDetailsPaymentImage'>
        <img src={paidimg1} alt="" />
      </div>
      <div className='requestDetails_Button'>
        <div>
          <Button onClick={handleOopen}>Approve</Button>
        </div>
        <div>
          <Button onClick={handleOoopen}>Pending</Button>
        </div>
        <div>
          <Button onClick={handleOooopen}>Reject</Button>
        </div>
      </div>
      {/* Modal for image zoom */}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='req_details_ooo'>
          <img className='req_details_kkk' src={imagereq1} alt="" />
        </div>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
      >
        <div className='req_details_ooo'>
          <img className='req_details_kkk' src={imagereq1} alt="" />
        </div>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
      >
        <div className='req_details_ooo'>
          <img className='req_details_kkk' src={imagereq1} alt="" />
        </div>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
      >
        <div className='req_details_ooo'>
          <img className='req_details_kkk' src={imagereq1} alt="" />
        </div>
      </Modal>



      {/* Modal for approved button */}
      <Modal
        open={oopen}
        onClose={handleCclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='requestDetails_Dialoge__box'>
          <Box sx={style} className='requestDetails_modal_box'>
            <div className='texxt'>
              <h3>Approved !!</h3>
            </div>
            <div className='req_Det_div1'>
              <Button onClick={handleCclose}>OK</Button>
              <Button onClick={handleCclose}>CANCEL</Button>
            </div>
          </Box>
        </div>
      </Modal>
      {/* Modal for pending button */}
      <Modal
        open={ooopen}
        onClose={handleCcclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='requestDetails_Dialoge__box'>
          <Box sx={style} className='requestDetails_modal_box' >
            <div className='texxt'>
              <h3>Pending !!</h3>
            </div>
            <div className='req_Det_div1'>
              <Button onClick={handleCcclose}>OK</Button>
              <Button onClick={handleCcclose}>CANCEL</Button>
            </div>
          </Box>
        </div>
      </Modal>
      {/* Modal for rejected button */}
      <Modal
        open={oooopen}
        onClose={handleCccclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='requestDetails_Dialoge__box'>
          <Box sx={style} className='requestDetails_modal_box' >
            <div className='texxt'>
              <h3>Rejected !!</h3>
            </div>
            <div className='req_Det_div1'>
              <Button onClick={handleCccclose}>OK</Button>
              <Button onClick={handleCccclose}>CANCEL</Button>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  )
}

export default RequestDetails