import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductPage } from '../ProductPage'
import { ProductListPage } from '../ProductListPage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ProductPage/>}></Route>
            <Route path='/products' element={<ProductListPage/>}></Route>
        </Routes>
    </div>
  )
}
