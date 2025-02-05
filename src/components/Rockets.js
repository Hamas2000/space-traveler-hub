import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketsItem from './RocketsItem';
import { getDataFromServer } from '../redux/Rockets/RocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const { rocketData, loading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {loading && <p className="text-center text-lg">Loading...</p>}
        {error && (
          <p className="text-red-500 text-center">
            Error:
            <br />
            {error}
          </p>
        )}
        {!loading && !error && rocketData.map((rocket) => (
          <RocketsItem
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            image={rocket.image}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
