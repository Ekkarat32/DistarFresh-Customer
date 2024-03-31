import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SearchCustomer from "./components/SearchCustomer/SearchCustomer"
import OrderCustomer from "./components/OrderCustomer/OrderCustomer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"

function App() {


  return (
    <Router>
      <Container>
        {/* Router */}
        <Routes>
          <Route path="/" element={<SearchCustomer />} />
          <Route path="/orderCustomer" element={<OrderCustomer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
