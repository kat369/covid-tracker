import React from 'react';
import { useContext, useState } from 'react';

import UserContext from '../../Usercontext';
import ListView from '../table/views/list-view';
import GridView from '../table/views/grid-view';
import TableActions from '../table/table-actions';
import SearchInput from '../table/search-input';

import './Body.css';
import '../table/table.css';

function Body() {
  const { setView, view, data, fetchData, setData, loading } = useContext(UserContext);

  const onChange = (value) => {
    if (!value.length) {
      fetchData();
    } else {
      setData(data.filter((datum) => datum.area.toLowerCase().includes(value.toLowerCase())));
    }
  };

  return (
    <div className="body_container">
      <div className="body_srch">
        <SearchInput onChange={onChange} />
        <TableActions view={view} setView={setView} />
      </div>
      <div className="table-container">
        {loading ? <div className='loading'><svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlspace="preserve">
    <path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="1s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
</svg></div> : null}
        {!loading && view === 'list' ? <ListView data={data} loading={loading}/> : <GridView data={data} loading={loading}/>}
      </div>
    </div>
  );
}

export default Body;
