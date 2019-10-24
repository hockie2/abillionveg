import React from 'react';
import RecipeConfirmation from './recipeconfirmation';

import styles from '../style.scss';

class AddRecipe extends React.Component {

    constructor() {
        super();
        this.state = {
            addrecipe:{}
        }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(event){
        event.preventDefault();

        let recipe = {
            url: event.target.url.value,
            title: event.target.title.value,
            description: event.target.description.value,
            ingredients: event.target.ingredients.value,
            instructions:event.target.instructions.value
        }

        this.setState({ addrecipe: recipe })
        console.log(this.state.addrecipe)
    }





  render() {



    return (
      <div className={styles.addrecipe_wrapper}>
        <div className={styles.xcircle_wrapper}><box-icon name='x-circle' size='lg' onClick={this.props.closeRecipeHandler}/></div>
        <h1>Add a Recipe</h1>

        <form onSubmit={this.submitForm}>
            <div className={styles.addimage_wrapper}><box-icon name='image' size='lg' color='#0079b1'/>Add Photo</div>
            <div className={styles.input}><h2>url</h2><input type='text' name='url'></input></div>
            <div className={styles.input}><h2>Title</h2><input type='text' name='title'></input></div>
            <div className={styles.input}><h2>Description</h2><textarea type='text' name='description'></textarea></div>
            <div className={styles.input}><h2>Ingredients</h2><textarea type='text' name='ingredients'></textarea></div>
            <div className={styles.input}><h2>Instructions</h2><textarea type='text' name='instructions' ></textarea></div>
            <button type='submit'>Submit my Recipe</button>
        </form>

        <RecipeConfirmation addrecipe={this.state.addrecipe} onConfirmation={this.props.onConfirmation}/>
      </div>
    );
  }
}



export default AddRecipe;
