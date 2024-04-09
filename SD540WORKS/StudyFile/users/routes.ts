import express from 'express'
const userRouter=express.Router() //built-in middleware


userRouter.get('/users',get_users)
userRouter.post('/users',post_users)
userRouter.get('/:user_id',get_user)
userRouter.put('/:user_id',put_user)
userRouter.delete('/:user_id',delete_user)

export default userRouter