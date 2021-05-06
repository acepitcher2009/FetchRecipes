import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../styles/styles.css'

const RecipeCard = (props) => {
    return (
        <Card className='bckgrnd'>
            <CardImg top src={props.recipes.thumbnail ? props.recipes.thumbnail : "noImageFound.jpg"} />
            <CardBody>
                <CardTitle tag="h5" className="cardFont">{props.recipes.title}</CardTitle>
                <CardText className="cardFont">{props.recipes.ingredients}</CardText>
            </CardBody>
        </Card>
    )
}
export default RecipeCard;