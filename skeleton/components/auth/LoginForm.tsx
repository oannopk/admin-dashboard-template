'use client'

import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Paper, TextField, Typography } from '@mui/material'
import { login } from '@/redux/userSlice'
import { useAppDispatch } from '@/redux/store'

const LoginForm = () => {
  const router = useRouter()

  const dispatch = useAppDispatch()

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onSubmitForm = async (e: FormEvent<Element>) => {
    try {
      e.preventDefault()

      await dispatch(login({ username, password }))
      router.push('/')
    } catch (e) {}
  }

  return (
    <Paper className="w-full max-w-[400px]  text-center p-10">
      <Typography variant="h5">Login</Typography>
      <form className="flex flex-col gap-6 mt-6" onSubmit={onSubmitForm}>
        <TextField
          className="w-full"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <TextField
          className="w-full"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Paper>
  )
}

export default LoginForm
