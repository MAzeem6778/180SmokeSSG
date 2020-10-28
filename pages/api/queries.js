export const getCategoryByUrl = (url_key) => {
    return `
    {
        categoryList(filters:{url_key:{eq:"${url_key}"}}) {
            id
        }
    }
    `
}

export const getBannerURL = () => {
    let filters = ["area : HOMEPAGE"];
    return `
    query {
        rbsliderBanner(${filters.join(', ')}) {
            id
            name
            display_arrows
            display_bullets
            is_random_order_image
            is_stop_animation_mouse_on_banner
            pause_time_between_transitions
            slide_transition_speed
            sliders{
                id
                img_file
                img_url
                img_url_final
                mobile_file
                mobile_url
                mobile_url_final
                img_alt
                url
                is_add_nofollow_to_url
                is_open_url_in_new_window
            }
        }
      }
    `
}




export const getFeaturedProducts = (id) => {
    return `
    {
        categoryList(filters:{ids:{eq:"${id}"}}) {
               id
               children {
                   id
                   name
                   url_key
                   url_path
                   children_count
                   path
                   image
                   products(pageSize: 1) {
                       items {
                           thumbnail{
                               label
                             }
                           small_image {
                               url
                           }
                           price_range {
                               minimum_price {
                                 final_price {
                                   currency
                                   value
                                 }
                               }
                           }
                       }
                   }
               }
           }
       }
    `
}


export const getNewRelease = (id) => {
    return `
    {
        categoryList(filters:{ids:{eq:"${id}"}}) {
               id
               children {
                   id
                   name
                   url_key
                   url_path
                   children_count
                   path
                   image
                   products(pageSize: 1) {
                       items {
                           thumbnail{
                               label
                             }
                           small_image {
                               url
                           }
                           price_range {
                               minimum_price {
                                 final_price {
                                   currency
                                   value
                                 }
                               }
                           }
                       }
                   }
               }
           }
       }
    `
}

export const getTextContent = () => {
    return `
    {
        cmsBlocks(identifiers: ["smoke_footer_bottom_links",
              "smoke_footer_disclaimer",
              "smoke_footer_social",
              "header_free_shipping"]) {
            items {
                content
                identifier
            }
        }
    }
    `
}



export const getProductsByCategory = (categoryId) => {
    return `
    {
        products(filter:{category_id:{eq:"${categoryId}"}}) {
            items {
                id
                __typename
                name
                url_key
                sku
                thumbnail{
                    label
                  }
                small_image {
                    url
                }
                price_range {
                    minimum_price {
                      final_price {
                        currency
                        value
                      }
                     
                    }
                }
            }
        }
    }
    `
}



export const getCategoryById = (categoryId) => {
    return `
    {
        category(id: ${parseInt(categoryId)}) {
            id
            name
            url_key
            description
            children {
                id
                name
                position
                level
                url_key
                include_in_menu
            }
        }
    }
  `
}






export const GET_SIMPLE_PRODUCT_DETAIL = () => {
    return `
{
  productDetail: products(filter: { sku: { eq: $sku } } ) {
      items {
        id
        name
        __typename
        meta_description
        reviews{
          rating
          count
        }
        price_range{
          minimum_price{
            final_price{
              value
              currency
            }
          }
        }
        description{
          html
        }
        media_gallery{
          label
          url
        }
        image{
          label
          url
        }
      }
  }
}
`}

export const GET_Configurable_PRODUCT_DETAIL = () => {
    return
    `
{
  productDetail: products(filter: { sku: { eq: $sku } } ) {
      items {
        id
        name
        meta_description
        reviews{
          rating
          count
        }
        price_range{
          minimum_price{
            final_price{
              value
              currency
            }
          }
        }
        description{
          html
        }
        media_gallery{
          label
          url
        }
        image{
          label
          url
        }
        ... on ConfigurableProduct {
          configurable_options {
              attribute_code
              attribute_id
              id
              label
              values {
                  default_label
                  label
                  store_label
                  use_default_value
                  value_index
              }
          }
          variants {
              attributes {
                  code
                  value_index
              }
              product {
                  id
                  media_gallery_entries {
                      disabled
                      file
                      label
                      position
                  }
                  sku
                  stock_status
                  region_restrictions
              }
          }
      }
      }
  }
}
`}
export const GET_REVIEWS = () => {
    return `
{
  reviews(filter: { product_id: $productId }) {
      summary {
          rating
          count
      }
      items {
          customer_id
          detail
          nickname
          title
          review_at
          ratings {
              vote_id
              review_id
              rating_code
              value
          }
      }
  }
}`}

export const getFilterData = () => {
    return `
    query{
        products(filter:{category_id:{in:"14"}}){
          aggregations {
          count
          label
          attribute_code
          options{
            label
            value
          }
        }
        }
      }
`
}



export const getSimpleProductDetail = (urlKey) => {
    return `{
        productDetail: products(filter: { url_key: { eq: "${urlKey}" } } ) {
            items {
              id
              name
              __typename
              meta_description
              reviews{
                rating
                count
              }
              price_range{
                minimum_price{
                  final_price{
                    value
                    currency
                  }
                }
              }
              description{
                html
              }
              media_gallery{
                label
                url
              }
              image{
                label
                url
              }
            }
        }
      }
`
}



export const getConfigurableProductDetail = (urlKey) => {
    return `{
        productDetail: products(filter: { url_key: { eq: "${urlKey}" } } ) {
            items {
              id
              name
              meta_description
              reviews{
                rating
                count
              }
              price_range{
                minimum_price{
                  final_price{
                    value
                    currency
                  }
                }
              }
              description{
                html
              }
              media_gallery{
                label
                url
              }
              image{
                label
                url
              }
              ... on ConfigurableProduct {
                configurable_options {
                    attribute_code
                    attribute_id
                    id
                    label
                    values {
                        default_label
                        label
                        store_label
                        use_default_value
                        value_index
                    }
                }
                variants {
                    attributes {
                        code
                        value_index
                    }
                    product {
                        id
                        media_gallery_entries {
                            disabled
                            file
                            label
                            position
                        }
                        sku
                        stock_status
                        region_restrictions
                    }
                }
            }
            }
        }
      }
    `
}


export const getBundleProduct = (urlKey) => {
    return `{
        productDetail: products(filter: { url_key: { eq: "${urlKey}" } } ) {
            items {
                __typename
                sku
                name
                only_x_left_in_stock
                stock_status
                ... on BundleProduct {
                    dynamic_sku
                    dynamic_price
                    dynamic_weight
                    price_view
                    ship_bundle_items
                    items {
                        option_id
                        title
                        required
                        type
                        position
                        sku
                        options {
                            id
                            quantity
                            position
                            is_default
                            price
                            price_type
                            can_change_quantity
                            label
                            product {
                                id
                                name
                                sku
                                type_id
                                stock_status
                            }
                        }
                    }
                }
            }
        }
    }
    `
}
