import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Collapse,
  Button,
  Dialog,
  DialogContent,
} from '@mui/material'
import { RiEdit2Fill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import girl1 from './Images/girl-1.jpg'
import girls3 from './Images/girls-3.jpg'
import girls5 from './Images/girls-5.jpg'
import mens1 from './Images/mens-1.jpg'
import mens2 from './Images/mens-2.jpg'
import mens4 from './Images/mens-4.jpg'

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
  const [expandedRows, setExpandedRows] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Handle row click to expand/collapse
  const handleRowClick = (id) => {
    const isExpanded = expandedRows.includes(id)
    if (isExpanded) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id))
    } else {
      setExpandedRows([...expandedRows, id])
    }
  }

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
      <TableContainer
        component={Paper}
        style={{ backgroundColor: '#212631', borderRadius: '10px' }}
      >
        <Table>
          <TableHead style={{ backgroundColor: '#2a303d' }}>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: 'bold', color: 'wheat' }}>
                Image
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', color: 'wheat' }}>
                ID
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', color: 'wheat' }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', color: 'wheat' }}>
                Mobile No
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', color: 'wheat' }}>
                To Till
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', color: 'wheat' }}>
                Total Days
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', color: 'wheat' }}>
                Status
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', color: 'wheat' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell align="center">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleImageClick(item.image)}
                    />
                  </TableCell>
                  <TableCell align="center" style={{ color: 'wheat' }}>
                    {item.id}
                  </TableCell>
                  <TableCell align="center" style={{ color: 'wheat' }}>
                    {item.name}
                  </TableCell>
                  <TableCell align="center" style={{ color: 'wheat' }}>
                    {item.mobile}
                  </TableCell>
                  <TableCell align="center" style={{ color: 'wheat' }}>
                    {item.toTill}
                  </TableCell>
                  <TableCell align="center" style={{ color: 'wheat' }}>
                    {item.totalDays}
                  </TableCell>
                  <TableCell align="center" style={{ color: getApprovalColor(item.approved) }}>
                    {item.approved === true
                      ? 'Approved'
                      : item.approved === false
                        ? 'Rejected'
                        : 'Pending'}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: 'green',
                        color: 'white',
                        marginRight: '10px',
                      }}
                    >
                      Present
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: 'red',
                        color: 'white',
                      }}
                    >
                      Absent
                    </Button>
                    <IconButton aria-label="edit">
                      <RiEdit2Fill style={{ fontSize: '25px', color: 'wheat' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={8} style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse in={expandedRows.includes(item.id)} timeout="auto" unmountOnExit>
                      <div
                        style={{
                          backgroundColor: '#2a303d',
                          padding: '10px',
                          borderRadius: '10px',
                          margin: '10px 0',
                        }}
                      >
                        <Typography variant="body2" style={{ color: 'wheat' }}>
                          {item.description}
                        </Typography>
                      </div>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
