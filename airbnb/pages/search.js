import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'

function search({ searchResults }) {
  const router = useRouter()

  const { location, startDate, endDate, numOfGuests } = router.query
  console.log(router.query)
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  console.log(formattedStartDate)

  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')

  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className="h-screen">
      <Header placeHolder={`${location} | ${range} | ${numOfGuests}`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300 stays - {range} for {numOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stay in {location}
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )
  return {
    props: {
      searchResults,
    },
  }
}
