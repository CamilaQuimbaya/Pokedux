import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { setLoading } from './uiSlice';
import { getPokemon, getPokemons, getPokemonDetails } from '../api';

const initialState = {
    pokemons:[],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemons();
        const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false))
    }
);
export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    async (name , { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonRes = await getPokemon(name);
        const dataPokemon = pokemonRes.id ? [pokemonRes] : [];
        dispatch(setPokemons(dataPokemon));
        dispatch(setLoading(false));
        }
    );

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });
    
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            };
        }
    },
});

export const {setFavorite, setPokemons} = dataSlice.actions;
console.log(dataSlice);
export default dataSlice.reducer;