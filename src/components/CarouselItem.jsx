import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import play from '../assets/statics/play-icon.png';
import plus from '../assets/statics/plus-icon.png';
import remove from '../assets/statics/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  //<Link to={`/player/${id}`}> redireccion al video en especifico

  //Funcion que maneja el guardado de nuestros favoritos
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration
    })
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={play}
              alt="Play Icon"
            />
          </Link>
          {
            isList ? //Con isList nos permite saber si es una lista (viene por defecto en true)
              <img
                className="carousel-item__details--img"
                src={remove}
                alt="Remove Icon"
                onClick={() => handleDeleteFavorite(id)} />
              :
              <img
                className="carousel-item__details--img"
                src={plus}
                alt="Plus Icon"
                onClick={handleSetFavorite}
              />
          }



        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
};


/**
 * Validaciones
 * son una propiedad de nuestros componentes que nos 
 * permiten especificar qué tipo de elementos son nuestras
 * props: arrays, strings, números, etc.
 */
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

//
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);