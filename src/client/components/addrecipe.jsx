import React from 'react';
import ReactDOM from "react-dom";
import {Image} from 'cloudinary-react';

import RecipeConfirmation from './recipeconfirmation';

import styles from '../style.scss';


class AddRecipe extends React.Component {

    constructor() {
        super();
        this.state = {
            addrecipe:{},
            formVisibility:true,
            recipeConfirmationVisiblity:false
        }
        this.submitForm = this.submitForm.bind(this)
        this.editForm = this.editForm.bind(this)
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

        //Hide Unhide Add Recipe Form
        if(this.state.formVisibility === true){
            this.setState({formVisibility:false})
        }
        else{
            this.setState({formVisibility:true})
        }

        //Hide Unhide Recipe Confirmation
        if(this.state.recipeConfirmationVisiblity === false){
            this.setState({recipeConfirmationVisiblity:true})
        }
        else{
            this.setState({recipeConfirmationVisiblity:false})
        }

    }

    editForm(){

        //Hide Unhide Add Recipe Form
         if(this.state.formVisibility === true){
            this.setState({formVisibility:false})
        }
        else{
            this.setState({formVisibility:true})
        }

        //Hide Unhide Recipe Confirmation
        if(this.state.recipeConfirmationVisiblity === false){
            this.setState({recipeConfirmationVisiblity:true})
        }
        else{
            this.setState({recipeConfirmationVisiblity:false})
        }

    }




  render() {

    let addRecipeForm_class = this.state.formVisibility? styles.addRecipeForm : styles.addRecipeFormHidden
    let recipeconfirmation_class = this.state.recipeConfirmationVisiblity? styles.recipeconfirmation_wrapper : styles.recipeconfirmation_wrapperHidden

    return (
      <div className={styles.addrecipe_wrapper}>
        <div className={styles.xcircle_wrapper}><box-icon name='x-circle' size='lg' onClick={this.props.closeRecipeHandler}/></div>
        <div className={addRecipeForm_class}>
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
        </div>
        <RecipeConfirmation recipeconfirmation_class={recipeconfirmation_class} editForm={this.editForm} addrecipe={this.state.addrecipe} onConfirmation={this.props.onConfirmation}/>
      </div>
    );
  }
}



export default AddRecipe;
