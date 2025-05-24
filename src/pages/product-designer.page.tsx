import { Fragment } from 'react'

// components
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import ModelContainer from '@/components/model-container'

const ProductDesignerPage = () => {
  return (
    <Fragment>
      <Header />
      <ModelContainer />
      <Sidebar />
    </Fragment>
  )
}

export default ProductDesignerPage
