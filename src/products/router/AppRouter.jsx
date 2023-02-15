import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, Products  } from "../pages";
import { ProductDescription } from "../pages/ProductDescription";
import { SearchPage } from "../pages/SearchPage";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="home" element={ <HomePage /> } />
            <Route path="products" element={ <Products /> } />
            <Route path="search" element={ <SearchPage />} />

            <Route path="description/:id" element={ <ProductDescription /> } />

            <Route path="/" element={ <Navigate to='/products' />} />

        </Routes>

    </div>
  )
}
