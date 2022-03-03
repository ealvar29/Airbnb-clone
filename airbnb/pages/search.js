import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function search() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">300 stays</p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stay in Mars</h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default search