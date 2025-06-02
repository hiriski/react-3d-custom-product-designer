// components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ProductInformation from './product/product-info'
import { FC } from 'react'

interface Props {
  product: IProduct
}

const Sidebar: FC<Props> = ({ product }) => {
  const sidebarWidth = 640

  return (
    <Box
      sx={{
        p: 4,
        top: 0,
        right: 0,
        display: 'flex',
        position: 'fixed',
        minHeight: '100vh',
        width: sidebarWidth,
        flexDirection: 'column',
      }}
    >
      <Box
        sx={[
          theme => ({
            flex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            borderRadius: 3,
            flexDirection: 'column',
            boxShadow: theme.shadows[2],
            backgroundColor: theme.palette.background.paper,
            py: 4.4,
            px: 4,
          }),
        ]}
      >
        <ProductInformation product={product} />
        <Box
          sx={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Typography variant='subtitle2'>Made with</Typography>
          <Box
            sx={{
              width: 20,
              height: 20,
            }}
            component='svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
          >
            <path
              fill='#f8312f'
              d='M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64'
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
