const express = require('express')
const data    = require('./data/company')
const app     = express()
const port    = process.env.PORT || 3000

app.get('/getJobExperience/:job_id', 
  (req, res) => {
  	let foundJob = false
    for(let i in data.jobs){
      var job = data.jobs[i]
      if(job.id === req.params.job_id){
        console.log(req.params.job_id)
        foundJob = true
        res.status(200).json({"exp-years": job.experience})
      }
    }
    if(!foundJob)
      res.status(200).json({"err":"job not found"})
  })

app.listen(port,
  () => {
      console.log(`listening on port ${port}`)
  }) 