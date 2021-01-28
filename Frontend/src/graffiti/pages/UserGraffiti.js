import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import GraffitiList from '../components/GraffitiList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './UserGraffiti.css';

const UserGraffiti = () => {
  const [loadedGraffiti, setLoadedGraffiti] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [filteredGraffiti, setFilteredGraffiti] = useState([]);
  const userId = useParams().userId;

  useEffect(() => {
    const fetchGraffiti = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );
        setLoadedGraffiti(responseData.places);
        setFilteredGraffiti(responseData.places);
      } catch (err) {}
    };
    fetchGraffiti();
  }, [sendRequest, userId]);

  const graffitiDeletedHandler = deletedGraffitiId => {
    setFilteredGraffiti(prevGraffiti =>
      prevGraffiti.filter(graffito => graffito.id !== deletedGraffitiId)
    );
  };


  const sorting = (title, ) => {
    console.log(title);
    const key = document.getElementById('selectSorting').value;
    const temp = loadedGraffiti.filter(item => item[key].toLowerCase().includes(title.toLowerCase()));
    console.log(temp);
    setFilteredGraffiti(temp);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedGraffiti && (

<div>
<div className="forma6">
  <select id="selectSorting" className="forma4">
    <option value={'title'}>Graffiti title</option>
    <option value={'address'}>Graffiti location</option>
  </select>

  <input type="text" placeholder="Search Graffiti ..." className="forma5" onChange={e => sorting(e.target.value)}/>

</div>

        {/* <GraffitiList items={loadedGraffiti} onDeleteGraffiti={graffitiDeletedHandler} />  */}
        <GraffitiList items={filteredGraffiti} onDeleteGraffiti={graffitiDeletedHandler} />
        </div>
      )}
    </React.Fragment>
  );
};

export default UserGraffiti;
