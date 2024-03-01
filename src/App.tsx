import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loading from "./components/Loading"
import Customers from "./pages/Customers"


// importing all pages here 
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Product = lazy(() => import("./pages/Product"))
const Transaction = lazy(() => import("./pages/Transaction"))

const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/payment" element={<Transaction />} />
          <Route path="/users" element={<Customers />} />
        </Routes>
      </Suspense>

    </BrowserRouter>


  )
}

export default App
