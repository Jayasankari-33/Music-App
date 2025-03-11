import React from 'react';
import { useParams } from 'react-router-dom';

const Uitem = () => {
    const { id } = useParams();

    return (
        <div>
            <br />
            <div>
                <div>
                    <div style={{ display: "flex", justifyContent: "center", height: "450px" }} >
                        {/* Placeholder for Image - You would fetch and display song image here based on ID */}
                        <div>Song Image Placeholder</div>
                    </div>
                    <h1 className='text-center'> Song Title - Song ID: {id}</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ width: '38%', marginLeft: "150px" }}>
                            <h2 style={{ color: "grey" }}><strong>Description</strong></h2>
                            <hr style={{ height: "3px", backgroundColor: "black" }} />
                            <p style={{ fontSize: "20px" }}>Song Description Placeholder. You would fetch and display song description here.</p>
                        </div>
                        <div style={{ marginRight: '300px' }}>
                            <h2 style={{ color: "grey" }}><strong>Info</strong></h2>

                            <hr style={{ height: "3px", backgroundColor: "black" }} />
                            <p style={{ fontSize: "20px" }}>Title: Song Title</p>
                            <p style={{ fontSize: "20px" }}>Singer: Song Singer</p>
                            <p style={{ fontSize: "20px" }}>Genre: Song Genre</p>
                            {/* Other info relevant to songs */}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        {/* Button for actions - adjust for music player actions */}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
                            Play Song {/* Update Link if needed */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uitem;