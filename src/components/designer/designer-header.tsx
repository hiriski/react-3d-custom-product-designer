import { useCallback } from 'react'

// components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material'

// hooks
import { useNavigate } from 'react-router-dom'

// assets
import BackIcon from '@/assets/icons/solar--arrow-left-linear.svg'

const DesignerHeader = () => {
  const navigate = useNavigate()

  const onClickBack = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <Box
      sx={{
        p: {
          xs: 2,
          lg: 4,
        },
        gap: 1,
        top: 0,
        left: 0,
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        zIndex: 9,
      }}
    >
      <Button
        onClick={onClickBack}
        startIcon={
          <Box component='img' src={BackIcon} sx={{ width: 20, height: 20 }} />
        }
        sx={{
          px: 2,
          shadow: 2,
          borderRadius: 12,
          textTransform: 'none',
          backgroundColor: theme => alpha(theme.palette.background.paper, 0.75),
          fontWeight: '600',
          color: 'text.primary',
        }}
      >
        Back
      </Button>
    </Box>
  )
}

export default DesignerHeader
