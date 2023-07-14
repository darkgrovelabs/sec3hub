import { Box } from '@/chakra/components'
import { getProducts, getProductsStats } from '@/features/products/api'
import ProductsTable from '@/features/products/components/ProductsTable'
import Widgets from '@/features/products/components/Widgets'

export const metadata = {
  title: 'Products',
  description:
    'Explore web3 security products and tools to stay safe in the decentralized world',
}

export default async function Products() {
  const [products, stats] = await Promise.all([
    getProducts(),
    getProductsStats(),
  ])

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
