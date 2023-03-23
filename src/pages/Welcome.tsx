import React from 'react'
import { Link } from 'react-router-dom'

import { Box, Button } from '@mui/material'

const Welcome = () => {
  return (
    <div className='welcome'>
        <Box sx={{display: 'flex',flexDirection: 'row',  justifyContent: 'space-around', alignItems: 'center' , minHeight:595}}>
         <Link to={"/countries"}>
         <Button variant="contained" color="success" sx={{p:3 , borderRadius:5}}>
               Let's discover countries!!
         </Button>
         </Link>
       </Box>
    </div>
  )
}

export default Welcome