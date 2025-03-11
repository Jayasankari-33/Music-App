// Wishlist.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Unavbar from './Unavbar';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    // User authentication and wishlist retrieval based on user ID is not implemented in the provided code.
    // For a music player, "Favorites" functionality is already in Favorities.jsx.
    // This component might be redundant or need significant adaptation.
    // For now, fetching from /favorities as a placeholder.
    try {
      const response = await axios.get(`http://localhost:3000/favorities`);
      const wishlistData = response.data;
      setWishlist(wishlistData);
    } catch (error) {
      console.error('Error fetching wishlist items: ', error);
    }
  };

  const removeFromWishlist = async (itemId) => {
    try {
      // Remove item from the wishlist
      await axios.delete(`http://localhost:3000/favorities/${itemId}`); // Adjust the endpoint accordingly

      // Refresh the wishlist items
      fetchWishlist();
    }
    catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  return (
    <div>
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Wishlist (Favorites)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <img
                src={item.imgUrl}  // CORRECTED LINE: Using item.imgUrl directly - Comment moved outside src
                alt="Item Image"
                className="rounded-t-lg"
                style={{ height: '350px', width: '500px' }}
              />
              {/* CORRECTED COMMENT LOCATION:  Moved comment here, outside the src attribute */}
              <div>
                <p className="text-xl font-bold mb-2">{item.title}</p>
                <p className="text-gray-700 mb-2">Singer: {item.singer}</p>
                <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
                {/* Price is not relevant for music player, can remove or adapt */}
                {/* <p className="text-blue-500 font-bold">Price: ${item.price}</p> */}

                <Button
                  style={{ backgroundColor: 'red', border: 'none' }}
                  onClick={() => removeFromWishlist(item.itemId)}
                >
                  Remove from Favorites
                </Button>

                <Button style={{ backgroundColor: 'rebeccapurple', border: 'none' }}>
                  <Link to={`/uitem/${item.itemId}`} style={{ color: 'white', textDecoration: 'none' }}>
                    View Song {/* Update Link if needed */}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;