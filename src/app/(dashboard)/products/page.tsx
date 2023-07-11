import { Box } from '@/chakra/components'
import { getProducts, getProductsStats } from '@/features/products/api'
import ProductsTable from '@/features/products/components/ProductsTable'
import Widgets from '@/features/products/components/Widgets'

// TODO: Metadata
export const metadata = {
  title: 'Products',
}

export default async function Products() {
  const [products, stats] = await Promise.all([
    getProducts(),
    getProductsStats(),
  ])

  console.log(products, stats)

  return (
    <>
      <Box mb={4}>
        <Widgets
          totalProducts={stats.totalProducts}
          totalOpenSource={stats.totalOpenSource}
          lastProduct={stats.lastRecord}
        />
      </Box>
      <ProductsTable
        initialData={products.data}
        initialPageCount={products.pageCount}
      />
    </>
  )
}
