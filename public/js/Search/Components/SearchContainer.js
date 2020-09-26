import React from "react";
import HostelList from "./HostelList"

class SearchContainer extends React.Component{
    render () {
        return (
            <div className={'SearchContainer'}>
                <div className={'SearchHeading'}>
                    {hostelData.length} stays
                    <h1>Stays in {hostelData[0].city}</h1>
                </div>
                <div className={'sortByContainer'}>
                    Sort By :
                    <div className={'sortBy'}>
                        <input type={'radio'} className={'sortByElement'} id={'pop'} name={'sort'}/>
                        <label htmlFor = {'pop'}>Popularity</label>
                    </div>
                    <div className={'sortBy'}>
                        <input type={'radio'} className={'sortByElement'} id={'rel'} name={'sort'}/>
                        <label htmlFor = {'rel'}>Relevance</label>
                    </div>
                    <div className={'sortBy'}>
                        <input type={'radio'} className={'sortByElement'} id={'rat'} name={'sort'}/>
                        <label htmlFor = {'rat'}>Rating</label>
                    </div>
                    <div className={'sortBy'}>
                        <input type={'radio'} className={'sortByElement'} id={'pri'} name={'sort'}/>
                        <label htmlFor = {'pri'}>Price</label>
                    </div>
                </div>
                <HostelList />
            </div>
        )
    }
}
export default SearchContainer