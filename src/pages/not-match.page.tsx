import { useCallback } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// router
import { useNavigate } from 'react-router-dom'

const NotMatchPage = () => {
  const navigate = useNavigate()

  const onClick = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <Stack
      direction='column'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography
        variant='h1'
        component='h2'
        sx={{
          fontWeight: '800',
          mb: 2,
          fontSize: { xs: 36, md: 50, lgx: 68 },
        }}
      >
        Ooops!
      </Typography>
      <Typography
        variant='h3'
        component='h4'
        sx={{
          mb: 2,
          color: 'text.secondary',
          fontSize: { xs: 20, md: 27, lgx: 34 },
        }}
      >
        Looks like you're in the wrong place.
      </Typography>
      <Typography
        variant='body1'
        sx={{ mb: 4, fontSize: 16, color: 'text.secondary' }}
      >
        We can't find the page you're looking for...{' '}
        <Button
          variant='text'
          onClick={onClick}
          sx={{ fontSize: 16, fontWeight: '600' }}
        >
          Take me home
        </Button>
      </Typography>
      <Box
        component='img'
        src='/404.png'
        alt='404'
        sx={{
          width: {
            xs: '100%',
            md: '90%',
          },
          mb: {
            xs: '-7%',
            md: '-10%',
          },
        }}
      />
    </Stack>
  )
}

export default NotMatchPage
