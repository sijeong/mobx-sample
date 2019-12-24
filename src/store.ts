// import { useAsObservableSource } from "mobx-react-lite";
import { observable } from 'mobx';

const Cities = [
    'Amsterdam',
    'London',
    'Madrid',
]

const Cities_ = [
    {key:'1', value:'Amsterdam'},
    {key:'2', value:'London'},
    {key:'3', value:'Madrid'},
]
export const createStore = () => {
    const store = {
        query: observable.box(''),
        setQuery(query:string){
            store.query.set(query.toLowerCase());
        },
        get filteredCities(){
            return Cities.filter(city => city.toLowerCase().includes(store.query.get()))
        },
        get allCities() {
            return Cities;
        }
    };

    return store;
}

export type TStore = ReturnType<typeof createStore>