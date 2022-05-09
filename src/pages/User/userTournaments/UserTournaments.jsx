import React, { useEffect, useState } from 'react'
import './UserTournaments.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const UserTournaments = () => {
    const [tournemets, setTournemets] = useState([])

    const { id } = useParams();
    const adminId = localStorage.getItem("adminId")

    //getAllTournements
    const getAllTournements = async () => {
        let url = `https://gm4-server.herokuapp.com/api/admin/count/booked/tournaments/${id}/${adminId}`;
        const options = {
            method: "GET",
            url: url,
            headers: {
                'Content-Type': "Application/json",
                'Authorization': "Bearer " + localStorage.getItem("token")
            },
        }
        try {
            const response = await axios(options);
            setTournemets(response.data)
        } catch (error) {
            alert(error.response.data.error)
        }
    }

    useEffect(() => {
        getAllTournements();
    }, [tournemets])

    return (
        <div>
            <Header />
            {/* header */}
            <div className='tournamentList_header'>
                <h1>Booked Tournaments</h1>
            </div>
            {/* end header */}
            <div className='tournamentList-booked_tournament'>
                <table class="BookedTournamentsTable">
                    {/* table header */}
                    <tr>
                        <th>No.</th>
                        <th data-th="Driver details"><span>Booked Date</span></th>
                        <th>Tourament Name</th>
                        <th>Conducting Org Name</th>
                        <th>Match Date & time</th>
                    </tr>
                    {/* end table header */}

                    {/* table data */}
                    {
                        tournemets.length !== 0 ? (
                            tournemets && tournemets.map((data, key) => {
                                return (
                                    <tr key={key}>
                                        <td>1</td>
                                        <td>10-02-2022</td>
                                        <td>Dreamhack </td>
                                        <td>Eleague</td>
                                        <td>10-02-2022 & 10:00</td>
                                    </tr>
                                )
                            })
                        ) : <p style={{ padding: "10px", color: '#111', fontWeight: '600', display: "flex", position: "absolute", left: "40%", }}>No Booked Tournemets!</p>
                    }

                    {/* table data */}




                </table>
            </div>
            <Footer />
        </div>
    )
}

export default UserTournaments