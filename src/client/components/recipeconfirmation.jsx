import React from 'react';

import styles from '../style.scss';

class RecipeConfirmation extends React.Component {

  render() {

    return (
      <div className={this.props.recipeconfirmation_class}>
        <h1>Recipe Confirmation</h1>

        <form onSubmit={this.props.onConfirmation}>
            <img src={this.props.addrecipe.url} className={styles.confirmation_image}/>
            <div className={styles.field}><input type='hidden' name='url' defaultValue={this.props.addrecipe.url}></input></div>
            <div className={styles.field}><h2>Title</h2><input type='text' name='title' defaultValue={this.props.addrecipe.title}></input></div>
            <div className={styles.field}><h2>Description</h2><textarea type='text' name='description' value={this.props.addrecipe.description}></textarea></div>
            <div className={styles.field}><h2>Ingredients</h2><textarea type='text' name='ingredients' value={this.props.addrecipe.ingredients}></textarea></div>
            <div className={styles.field}><h2>Instructions</h2><textarea type='text' name='instructions' value={this.props.addrecipe.instructions}></textarea></div>

            <button type='submit'>Confirm Submit</button>
        </form>
        <p onClick={this.props.editForm}>Back to edit</p>
      </div>
    );
  }
}

export default RecipeConfirmation;
