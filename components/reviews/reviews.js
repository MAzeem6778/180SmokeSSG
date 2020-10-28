import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'


const Reviews = ({ reviews }) => {
  
  return (
    <div className="m-h-15">
      {reviews ? 
      <>
        <h2>Reviews</h2>
        <CardColumns >
          {reviews.items.map((review,index)=>{
            return (
              <Card className="p-3 card-body" key={index}>
                <h3>{review.title}</h3>
                <h6>{review.ratings[0]&&review.ratings[0].value} Stars</h6>
                <blockquote className="blockquote mb-0 ">
                  <p>
                    {review.detail}
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      {review.nickname}
                    </small>
                  </footer>
                </blockquote>
            </Card>
            )
          })}
        </CardColumns>
      </>
        : null}
    </div>
  )
}

export default Reviews