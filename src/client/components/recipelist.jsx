import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './recipeitem';

import styles from '../style.scss';

class RecipeList extends React.Component {


  render() {

    const recipeList = this.props.recipeitems.map ((item,index) => {
        return(

                    <RecipeItem  key={index} item={item}/>

            )
    })


    return (
        <div className={styles.recipelist_wrapper}>
            <div className={styles.recipe_header}><h1>Recipes</h1></div>
            {recipeList}
        </div>
    );
  }
}


RecipeList.propTypes = {
  recipeitems: PropTypes.array.isRequired
};

export default RecipeList;
