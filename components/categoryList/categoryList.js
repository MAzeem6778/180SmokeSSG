import React from 'react'

import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Router from 'next/router';
import Link from 'next/link'


export const List = (props) => {
    return (
        <CardColumns style={{ width: '90%' }}>
            {
                props.data ?
                    props.data.map((product, index) => {

                        return (
                            <Link key={index} 
                            href={{
                                pathname: `/products/${product.url_key}`,
                                query: { type: product.__typename }
                              }}
                            >
                                <Card
                                    style={{ height: 500 }} key={index}>
                                    <Card.Img style={{ height: 300 }} variant="top" src={product.small_image.url} />
                                    <Card.Body style={{ height: 200, textAlign: 'center' }}>
                                        <Card.Title>{product.thumbnail.label}</Card.Title>
                                        <Card.Text>
                                            <b>{product.price_range.minimum_price.final_price.currency} {product.price_range.minimum_price.final_price.value}</b>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                             </Link>
                        )
                    })
                    : null
            }
        </CardColumns >

    )


}