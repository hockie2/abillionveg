import React from 'react';

import styles from '../style.scss';

class AddRecipe extends React.Component {

  render() {
    return (
      <div className={styles.addrecipe_wrapper}>
        <div className={styles.xcircle_wrapper}><box-icon name='x-circle' size='lg' onClick={this.props.closeRecipeHandler}/></div>
        <h1>Add a Recipe</h1>

        <form>
            <div className={styles.addimage_wrapper}><box-icon name='image' size='lg' color='#0079b1'/>Add Photo</div>
            <div className={styles.input}><h2>Title</h2><input type='text' name='title'></input></div>
            <div className={styles.input}><h2>Ingredients</h2><input type='text' name='ingredients'></input></div>
            <div className={styles.input}><h2>Instructions</h2><input type='text' name='instructions' ></input></div>

            <button type='submit'>Submit my Recipe</button>
        </form>
      </div>
    );
  }
}



export default AddRecipe;
