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
            <div className={styles.field}><h2>Description</h2><textarea type='text' name='description' placeholder={this.props.addrecipe.description}></textarea></div>
            <div className={styles.field}><h2>Ingredients</h2><textarea type='text' name='ingredients' placeholder={this.props.addrecipe.ingredients}></textarea></div>
            <div className={styles.field}><h2>Instructions</h2><textarea type='text' name='instructions' placeholder={this.props.addrecipe.instructions}></textarea></div>

            <button type='submit'>Confirm Submit</button>
        </form>
      </div>
    );
  }
}



export default RecipeConfirmation;
