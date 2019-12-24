import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { storeContext } from './context';
import { useRootData } from './hook';

const Search: React.FC = () => {
    // const store = React.useContext(storeContext);
    // if(!store) throw Error("Store shouldn't be null");

    // const {query, setQuery} = store;

    const {query, setQuery} = useRootData(store => ({
        query: store.query.get(),
        setQuery: store.setQuery
    }));

    return useObserver(() => {
        // return <input value={query.get()} onChange={e => setQuery(e.target.value)} />;
        return <input value={query} onChange={e => setQuery(e.target.value)} />
    });
}

export default Search;