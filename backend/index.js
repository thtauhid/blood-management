const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const addNewDonor = require('./routes/addNewDonor')
const viewExistingDonors = require('./routes/viewExistingDonors')
const newDonation = require('./routes/newDonation')
const donorProfile = require('./routes/donorProfile')
const deleteDonor = require('./routes/deleteDonor')
const updateDonor = require('./routes/updateDonor')

app.use('/addNewDonor', addNewDonor)
app.use('/viewExistingDonors', viewExistingDonors)
app.use('/newDonation', newDonation)
app.use('/donorProfile', donorProfile)
app.use('/deleteDonor', deleteDonor)
app.use('/updateDonor', updateDonor)

app.listen(port, () => {
    console.log(`App started on port ${port}`)
})