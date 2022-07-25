import {Input} from 'antd'
import React, { useEffect, useState } from 'react'
import { fetchPokemonWithDetails, fetchPokemonsWithDetails } from '../slices/dataSlice';
import { useDispatch } from 'react-redux';

const Search = () => {

  const [inputValue, setInputValue] = useState(''); 
  const dispatch = useDispatch();

  useEffect(() => {

    setInputValue( inputValue );
    if(inputValue.trim().length === 0){
      dispatch(fetchPokemonsWithDetails());
    }else if(inputValue.trim().length > 2 ){
      dispatch(fetchPokemonWithDetails(inputValue));
    }

  }, [inputValue]);

  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
  }

  const handleSearch = (e) => {
    if ( inputValue.trim().length > 2 ) {
        dispatch(fetchPokemonWithDetails(inputValue));
    }
  }

  return (
    <Input.Search placeholder='Buscar...'
      allowClear 
      onChange={handleInputChange}
      onSearch={ handleSearch }/>
  )
}

export default Search