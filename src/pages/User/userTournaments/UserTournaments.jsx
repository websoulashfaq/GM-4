import React from 'react'
import './UserTournaments.css'

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const UserTournaments = () => {
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
                    <tr>
                        <td>1</td>
                        <td>10-02-2022</td>
                        <td>Dreamhack </td>
                        <td>Eleague</td>
                        <td>10-02-2022 & 10:00</td>
                    </tr>
                    {/* table data */}
                    <tr>
                        <td>2</td>
                        <td>10-02-2022</td>
                        <td>Dreamhack </td>
                        <td>Eleague</td>
                        <td>10-02-2022 & 10:00</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>10-02-2022</td>
                        <td>Dreamhack </td>
                        <td>Eleague</td>
                        <td>10-02-2022 & 10:00</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>10-02-2022</td>
                        <td>Dreamhack </td>
                        <td>Eleague</td>
                        <td>10-02-2022 & 10:00</td>
                    </tr>


                </table>
            </div>
            <Footer />
        </div>
    )
}

export default UserTournaments