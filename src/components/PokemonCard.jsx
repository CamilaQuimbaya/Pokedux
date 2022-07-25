import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import './PokemonList.css';
import { setFavorite } from '../slices/dataSlice';


const PokemonCard = ({ name, image, types, id, favorite }) => {
    const dispatch = useDispatch();
    const typesString = types.map((elem) => elem.type.name).join(', ');

const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
};

return (
    <Card
        style={{borderRadius: 40, backgroundColor: '#FFB9FE', borderColor: '#FF4CFC'}}
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
        <Meta description={typesString} style={{fontSize:20}}/>
    </Card>
    );
};

export default PokemonCard;