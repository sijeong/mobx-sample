import React from 'react';
import { storeContext } from './context';
import { useObserver } from 'mobx-react-lite';
import { useRootData } from './hook';

export const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
    return (
        <ul>
            {cities.map(city => <li key={city}>{city}</li>)}
        </ul>
    );
}

export const CityList = () => {
    // const store = React.useContext(storeContext);
    // if (!store) throw Error("Store shouldn't be null");

    const cities = useRootData(store => store.filteredCities);

    return useObserver(() => {
        // return <CityView cities={store.filteredCities} /> 
        return <CityView cities={cities} />
    });
}

export default CityList;