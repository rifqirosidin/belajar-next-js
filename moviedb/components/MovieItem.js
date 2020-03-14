import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Row,
    CardTitle, Col, Container
} from 'reactstrap';


const MovieItem = ({movies}) => {
    const URL_POSTER = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
    if (!movies) {
        return <div>Loading...</div>
    }
    return (

        <Col sm="3">
            <Card>
                <CardImg top width="100%" height="200" src={URL_POSTER + movies.poster_path} alt="Card image cap"/>
                <CardBody>
                    <CardTitle><strong>{movies.title}</strong></CardTitle>
                    <CardText>{movies.overview.substring(0, 50)}...</CardText>
                </CardBody>
            </Card>
        </Col>


    )
}

export default MovieItem