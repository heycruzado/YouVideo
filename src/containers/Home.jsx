import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {

    return (
        <React.Fragment>
            <Header />
            <Search isHome/>
            {
                /**
                 * Validamos en caso de que la lista
                 * no tenga elementos no se muestre
                 */
                mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {
                            mylist.map(item =>
                                <CarouselItem
                                    key={item.id}
                                    {...item}
                                    isList //Con isList nos permite saber si es una lista (viene por defecto en true)
                                />
                            )}

                    </Carousel>
                </Categories>
            }


            <Categories title="Tendencias">
                <Carousel>
                    {
                        /**
                         * Tendra un llamado por cada item
                         * y así lo iteraremos
                         */
                        trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}

                </Carousel>
            </Categories>


            <Categories title="Originales de YouVideo">
                <Carousel>
                    {
                        originals.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);