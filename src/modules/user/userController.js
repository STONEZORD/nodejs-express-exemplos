import { Router } from 'express'

import { signup } from './userService'

const router = Router()
router.post('/signup', (req, res) => {
  try {                                                   //passa para dentro do try td q pode dar erro
    const answer = signup(req.body)
    res.send(answer)
    
  } catch (err) {                                          //se der erro no try entra no catch
    if (err.message === 'email_existente')
      return res.status(400).send(err.message)
    res.status(500).send(err.message)
  }
})


router.post('/login', (req, res) => {
  res.send('LOGIN /')
})

router.get('/test', (req, res) => {
  res.send('USER TEST 2 /')
})

export default router