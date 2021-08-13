import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dataprovider } from './components/Dataprovider'
import Details from './components/Detail'
import Products from './components/Products'

function App() {
  return (
    <Dataprovider>
      <div className="App">
        <Router>
          <Header />
          <section>
            <Routes>
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Details />} />

            </Routes>
          </section>
        </Router>

      </div>
    </Dataprovider>

  );
}

export default App;
