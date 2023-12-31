'use client'

import AddressCard from './AddressCard'

const addresses = [
  {
    id: 1,
    title: 'Home',
    address: '505 Independence Dr.',
  },
]

// render list of AddressCard components
const AddressCardList = () => {
  return (
    <div className="flex-1 max-w-3xl">
      {addresses.map((address) => (
        <AddressCard key={address.id} address={address} />
      ))}
    </div>
  )
}

export default AddressCardList
