import React, { useState } from 'react'
import {
  TableContainer,
  Paper,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  Typography,
} from '@mui/material'
import { RiEdit2Fill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import girl1 from './Images/girl-1.jpg'
import girls3 from './Images/girls-3.jpg'
import girls5 from './Images/girls-5.jpg'
import mens1 from './Images/mens-1.jpg'
import mens2 from './Images/mens-2.jpg'
import mens4 from './Images/mens-4.jpg'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CImage,
  CModal,
  CModalBody,
} from '@coreui/react'

const data = [
  { id: 101, name: 'Vihaan Deshmukh', mobile: '123-456-7890', image: girl1 },
  { id: 102, name: 'Dom', mobile: '123-456-7449', image: mens1 },
  { id: 103, name: 'Paul', mobile: '123-456-7449', image: girls3 },
  { id: 104, name: 'Whick', mobile: '123-456-7449', image: mens2 },
  { id: 105, name: 'Kavin', mobile: '123-456-7449', image: mens4 },
  { id: 106, name: 'Olive', mobile: '123-456-7449', image: girls5 },
]

const AttendanceTable = () => {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [confirmationDialog, setConfirmationDialog] = useState({ open: false, action: null })

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  // Function to close the image modal
  const handleClose = () => {
    setOpen(false)
    setSelectedImage(null)
  }

  // Function to open the confirmation dialog for approve/reject
  const handleActionClick = (action) => {
    setConfirmationDialog({ open: true, action })
  }

  // Function to close the confirmation dialog
  const handleConfirmClose = () => {
    setConfirmationDialog({ open: false, action: null })
  }

  // Function to confirm approve/reject action
  const handleConfirmAction = () => {
    // Add logic for approve or reject here (e.g., updating the backend)
    console.log(`Confirmed ${confirmationDialog.action}`)
    setConfirmationDialog({ open: false, action: null })
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Leave Application
      </Typography>
      <div
        style={{
          overflowX: 'auto',
          backgroundColor: '#212631',
          borderRadius: '10px',
        }}
      >
        <TableContainer component={Paper} style={{ width: '100%' }}>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-center">
              <CTableRow>
                <CTableHeaderCell className="bg-body-tertiary text-center">Image</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">Name</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">Mobile</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">Status</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((row) => (
                <CTableRow key={row.id}>
                  <CTableDataCell className="text-center">
                    <CImage
                      src={row.image}
                      rounded
                      thumbnail
                      onClick={() => handleImageClick(row.image)}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '50%',
                        width: '60px', // Adjust the size if necessary
                        height: '60px',
                        objectFit: 'cover', // Ensures the image covers the circle area
                      }}
                    />
                  </CTableDataCell>
                  <CTableDataCell className="text-center">{row.name}</CTableDataCell>
                  <CTableDataCell className="text-center">{row.mobile}</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: 'green', color: 'white', marginRight: '8px' }}
                      onClick={() => handleActionClick('approve')}
                    >
                      Approved
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: 'red', color: 'white' }}
                      onClick={() => handleActionClick('reject')}
                    >
                      Rejected
                    </Button>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <IconButton color="primary">
                      <RiEdit2Fill />
                    </IconButton>
                    <IconButton color="error">
                      <AiFillDelete />
                    </IconButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </TableContainer>
      </div>

      {/* Image Zoom Modal */}
      <CModal alignment="center" visible={open} onClose={handleClose}>
        <CModalBody>
          {selectedImage && (
            <CImage src={selectedImage} style={{ width: '100%', height: 'auto' }} />
          )}
        </CModalBody>
      </CModal>

      {/* Confirmation Dialog for Approve/Reject */}
      <Dialog open={confirmationDialog.open} onClose={handleConfirmClose}>
        <DialogTitle>
          {`Are You Sure You Want To ${
            confirmationDialog.action === 'approve' ? 'Approve' : 'Reject'
          }?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleConfirmClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAction} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AttendanceTable
