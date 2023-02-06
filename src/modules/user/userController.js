import { Router } from 'express'

import { signup } from './userService'

const router = Router ()
router.post('/signup', (req, res) => {
  const answer = signup (req.body) 
  res.send(answer)
})

router.post('/login', (req, res) => {
  res.send('LOGIN /')
})

router.get('/test', (req, res) => {
  res.send('USER TEST 2 /')
})

export default router