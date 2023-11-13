import Image from 'next/image'
import Category from './components/home/category'
import Banner from './components/home/banner'
import Products from './components/home/Products'

export default function Home() {
  return (

    <div>
      <Category />
      <Banner />
      <Products />
    </div>
  )
}
