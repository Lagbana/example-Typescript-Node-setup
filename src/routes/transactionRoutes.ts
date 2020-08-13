import { Router, Response, Request } from 'express'
const router = Router()

router.get('/transactions', (req: Request, res: Response) => {
  res.json('hello from here')
})

router.post('/transactions', (req: Request, res: Response) => {
  res.json('hello from here')
})

export { router }
