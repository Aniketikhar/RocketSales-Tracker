import React, { useState } from 'react'
import { TableContainer, Paper, IconButton, Dialog, DialogContent, Typography } from '@mui/material'
import { RiEdit2Fill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import girl1 from './Images/girl-1.jpg'
import girls3 from './Images/girls-3.jpg'
import girls5 from './Images/girls-5.jpg'
import mens1 from './Images/mens-1.jpg'
import mens2 from './Images/mens-2.jpg'
import mens4 from './Images/mens-4.jpg'
import {
  CAvatar,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

// Mock data for attendance
const data = [
  {
    id: 101,
    name: 'John',
    mobile: '9045116165',
    toTill: '2024-09-01 to 2024-09-15',
    totalDays: 15,
    description: 'Vacation',
    approved: true,
    image: girl1,
  },
  {
    id: 102,
    name: 'Dom',
    mobile: '90451161554',
    toTill: '2024-08-05 to 2024-08-25',
    totalDays: 20,
    description: 'Medical Leave',
    approved: false,
    image: mens1,
  },
  {
    id: 103,
    name: 'Paul',
    mobile: '9045886165',
    toTill: '2024-07-01 to 2024-07-10',
    totalDays: 10,
    description: 'Conference',
    approved: null,
    image: girls3,
  },
  {
    id: 104,
    name: 'Whick',
    mobile: '9045116165',
    toTill: '2024-06-10 to 2024-06-20',
    totalDays: 10,
    description: 'Personal',
    approved: true,
    image: mens2,
  },
  {
    id: 105,
    name: 'Kavin',
    mobile: '909996165',
    toTill: '2024-05-15 to 2024-05-30',
    totalDays: 15,
    description: 'Family Event',
    approved: false,
    image: mens4,
  },
  {
    id: 106,
    name: 'Olive',
    mobile: '9088116165',
    toTill: '2024-09-10 to 2024-09-20',
    totalDays: 10,
    description: 'Business Trip',
    approved: null,
    image: girls5,
  },
]

// Function to get approval status color
const getApprovalColor = (approved) => {
  if (approved === true) return 'green'
  if (approved === false) return 'red'
  return 'orange'
}

const AccordionTable = () => {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  // Function to close the modal
  const handleClose = () => {
    setOpen(false)
    setSelectedImage(null)
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Attendance Table
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
            <CTableHead className="text-nowrap">
              <CTableRow>
                <CTableHeaderCell
                  className="bg-body-tertiary text-center"
                  style={{ color: 'wheat' }}
                >
                  Image
                </CTableHeaderCell>
                <CTableHeaderCell
                  className="bg-body-tertiary text-center"
                  style={{ color: 'wheat' }}
                >
                  ID
                </CTableHeaderCell>
                <CTableHeaderCell
                  className="bg-body-tertiary text-center"
                  style={{ color: 'wheat' }}
                >
                  Name
                </CTableHeaderCell>
                <CTableHeaderCell
                  className="bg-body-tertiary text-center"
                  style={{ color: 'wheat' }}
                >
                  Mobile No
                </CTableHeaderCell>
                <CTableHeaderCell
                  className="bg-body-tertiary text-center"
                  style={{ color: 'wheat' }}
                >
                  To Till
                </CTableHeaderCell>
                <CTableHeaderCell
                  className="bg-body-tertiary text-center"
                  style={{ color: 'wheat' }}
                >
                  Total Days
                </CTableHeaderCell>
                <CTableHeaderCell
                  className="bg-body-tertiary text-center"
                  style={{ color: 'wheat' }}
                >
                  Status
                </CTableHeaderCell>
                <CTableHeaderCell
                  className="bg-body-tertiary text-center"
                  style={{ color: 'wheat' }}
                >
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((item, index) => (
                <CTableRow key={index}>
                  <CTableDataCell className="text-center">
                    <CAvatar
                      size="sx"
                      src={item.image}
                      onClick={() => handleImageClick(item.image)}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '50%',
                      }}
                    />
                  </CTableDataCell>
                  <CTableDataCell className="text-center" style={{ color: 'wheat' }}>
                    <div>{item.id}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center" style={{ color: 'wheat' }}>
                    <div>{item.name}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center" style={{ color: 'wheat' }}>
                    <div>{item.mobile}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center" style={{ color: 'wheat' }}>
                    <div>{item.toTill}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center" style={{ color: 'wheat' }}>
                    <div>{item.totalDays}</div>
                  </CTableDataCell>
                  <CTableDataCell
                    className="text-center"
                    style={{ color: getApprovalColor(item.approved) }}
                  >
                    <div
                      style={{
                        backgroundColor: getApprovalColor(item.approved),
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: '10px',
                        display: 'inline-block',
                      }}
                    >
                      {item.approved === true
                        ? 'Approved'
                        : item.approved === false
                          ? 'Rejected'
                          : 'Pending'}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <IconButton aria-label="edit">
                      <RiEdit2Fill style={{ fontSize: '25px', color: 'wheat' }} />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <AiFillDelete style={{ fontSize: '25px', color: 'wheat' }} />
                    </IconButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </TableContainer>
      </div>

      {/* Modal for zoomed image */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            overflow: 'hidden',
            borderRadius: '50%',
            maxWidth: 'none',
          },
        }}
      >
        <DialogContent style={{ padding: 0 }}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Zoomed"
              style={{
                width: '500px',
                height: '500px',
                borderRadius: '50%',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AccordionTable
