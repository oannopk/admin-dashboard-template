'use client'

import { useState, PropsWithChildren } from 'react'
import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'
import SidebarMenu from './SidebarMenu'
import { RootState, useAppDispatch } from '@/redux/store'
import { logout } from '@/redux/userSlice'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { username } = useSelector((state: RootState) => state.user)

  const dispatch = useAppDispatch()

  const router = useRouter()

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const handleLogout = async () => {
    try {
      await dispatch(logout())
      router.push('/login')
    } catch (e) {}
  }

  return (
    <div className="relative pb-6">
      <header className="flex justify-between p-4 py-2 shadow-md">
        <IconButton
          className="mr-4"
          color="primary"
          onClick={() => setIsSidebarOpen(true)}
          data-testid="hamburger-menu">
          <MenuIcon fontSize="large" />
        </IconButton>
        <div className="flex items-center">
          <div className="mr-6 text-lg">{username}</div>
          <Button variant="text" endIcon={<LogoutIcon />} onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>
      <div className="p-5">{children}</div>
      <SidebarMenu open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  )
}

export default MainLayout
