import React from 'react';

import styles from '../style.scss';

class RecipeConfirmation extends React.Component {



  render() {



    return (
      <div className={styles.recipeconfirmation_wrapper}>
        <h1>Recipe Confirmation</h1>

        <form onClick={this.props.onConfirmation}>
            <img src={this.props.addrecipe.url} className={styles.confirmation_image}/>
            <div className={styles.field}><h2>Title</h2><input type='text' name='url' defaultValue={this.props.addrecipe.title}></input></div>
            <div className={styles.field}><h2>Description</h2><input type='text' name='description' defaultValue={this.props.addrecipe.description}></input></div>
            <div className={styles.field}><h2>Ingredients</h2><input type='text' name='ingredients' defaultValue={this.props.addrecipe.ingredients}></input></div>
            <div className={styles.field}><h2>Instructions</h2><input type='text' name='instructions' defaultValue={this.props.addrecipe.instructions}></input></div>

            <button type='submit'>Submit my Recipe</button>
        </form>
      </div>
    );
  }
}



export default RecipeConfirmation;
