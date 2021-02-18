import axios from 'axios';

export const FETCH_BREWERY_LOADING = "FETCH_BREWERY_LOADING";
export const FETCH_BREWERY_SUCCESS = "FETCH_BREWERY_SUCCESS";
export const FETCH_BREWERY_FAIL = "FETCH_BREWERY_FAIL";

export const getBrewery = () => dispatch => {
    dispatch(FETCH_BREWERY_LOADING());

    axios
    .get('https://api.openbrewerydb.org/breweries?by_type=micro')
    .then(res => {
        console.log(res.data)
        dispatch(FETCH_BREWERY_LOADING(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(FETCH_BREWERY_FAIL(err.Response.code))
    })
};

export const fetchBreweryLoading = () => {
    return ({ type: FETCH_BREWERY_LOADING})
}

export const fetchBrewerySuccess = () => {
    return ({ type: FETCH_BREWERY_SUCCESS})
}

export const fetchBreweryFail = () => {
    return ({ type: FETCH_BREWERY_FAIL})
}