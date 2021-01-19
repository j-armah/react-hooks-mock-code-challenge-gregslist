import React, {useState} from "react";
import Search from "./Search";

function Header({ onSearch, search, sort, isSorted, onNewListing }) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: ""
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    //console.log(formData)
    onNewListing(formData)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} search={search}/>
      <button onClick={() => sort(!isSorted)}> {isSorted ? "Unsort" :"Sort A-Z"}</button>
      <div>
        <form onSubmit={handleSubmit}> 
          <label>
            New Listing:
            <input type="text" name="description" placeholder="description..."
              value={formData.description}
              onChange={handleChange}
            />
            <input type="text" name="image" placeholder="image url..."
              value={formData.image}
              onChange={handleChange}
            />
            <input type="text" name="location" placeholder="location..."
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Listing</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
