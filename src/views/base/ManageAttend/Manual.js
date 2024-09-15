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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const data = [
  {
    id: 101,
    name: 'John',
    mobile: '9045116165',
    status: 'Present',
    statu: 'Absent',
    image: girl1,
  },
  {
    id: 102,
    name: 'Dom',
    mobile: '90451161554',
    status: 'Present',
    statu: 'Absent',
    image: mens1,
  },
  {
    id: 103,
    name: 'Paul',
    mobile: '9045886165',
    status: 'Present',
    statu: 'Absent',
    image: girls3,
  },
  {
    id: 104,
    name: 'Whick',
    mobile: '9045116165',
    status: 'Present',
    statu: 'Absent',
    image: mens2,
  },
  {
    id: 105,
    name: 'Kavin',
    mobile: '909996165',
    status: 'Present',
    statu: 'Absent',
    image: mens4,
  },
  {
    id: 106,
    name: 'Olive',
    mobile: '9088116165',
    status: 'Present',
    statu: 'Absent',
    image: girls5,
  },
]

// Function to get status color
const getStatusColor = (status) => {
  return status === 'Present' ? 'green' : 'red'
}

const Manual = () => {
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
        Manual Attendance
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
                <CTableHeaderCell className="bg-body-tertiary text-center">Image</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">ID</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">Name</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  Mobile No
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">Status</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((item, index) => (
                <CTableRow key={index}>
                  <CTableDataCell className="text-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      onClick={() => handleImageClick(item.image)}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '50%', // For rounded effect
                        width: '60px', // Thumbnail size
                        height: '60px',
                        objectFit: 'cover', // Ensures the image covers the thumbnail area
                      }}
                    />
                  </CTableDataCell>
                  <CTableDataCell className="text-center">{item.id}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.name}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.mobile}</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                      <Typography
                        style={{
                          backgroundColor: getStatusColor(item.status),
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '10px',
                          display: 'inline-block',
                        }}
                      >
                        {item.status}
                      </Typography>
                      <Typography
                        style={{
                          backgroundColor: getStatusColor(item.statu),
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '10px',
                          display: 'inline-block',
                        }}
                      >
                        {item.statu}
                      </Typography>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <IconButton aria-label="edit">
                      <RiEdit2Fill style={{ fontSize: '25px', color: 'blue' }} />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <AiFillDelete style={{ fontSize: '25px', color: 'brown' }} />
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
            borderRadius: '0',
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
                width: '500px', // Adjust size if necessary
                height: '500px',
                objectFit: 'cover',
                borderRadius: '0',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Manual
