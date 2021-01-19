import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setListings(data)
      })
  }, [])

  const handleOnDelete = (listingObj) => {
    console.log(listingObj)
    fetch(`http://localhost:6001/listings/${listingObj.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      const updatedListings = listings.filter(listing => listing.id !== listingObj.id)
      setListings(updatedListings)
    })
  }

  const handleNewListing = (formData) => {
    console.log(formData)
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setListings([...listings, data])
    })
  }
  
  let filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(search))

  if (isSorted) {
    console.log('sort!!!!')
    filteredListings.sort((listingA, listingB) => {
      return listingA.location.localeCompare(listingB.location)
    })
  }

  return (
    <div className="app">
      <Header onSearch={setSearch} search={search} sort={setIsSorted} isSorted={isSorted} onNewListing={handleNewListing}/>
      <ListingsContainer listings={filteredListings} onDelete={handleOnDelete}/>
    </div>
  );
}

export default App;
