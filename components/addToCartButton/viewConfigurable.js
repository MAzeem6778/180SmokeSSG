import React from 'react'
import { Form } from 'react-bootstrap';

import ViewAddToCartButton from './viewAddToCartButton';

let values = ['black', 'yellow', 'white']

const ViewConfigurable = ({options}) => {
  return (
    <div>
      <Form.Group
        key={852369741}
        controlId={`12432`}
      >
        <h4 className="page-product-view--info-options--label">
          {options[0].label} <strong>*</strong>
        </h4>
        <div>
          {
            options[0].values.map(value => {
              return (
                <Form.Check
                  disabled={false}
                  className={'viewbundleview'}
                  key={value.value_index}
                  type="radio"
                  label={value.store_label}
                  title={value.label}
                  required={true}
                  value={value}
                  onClick={() => {
                    console.log('selected.')
                  }}
                  name={`configurableOption`}
                  id={`configurableOption${value}`}
                />
              );
            })}
        </div>
      </Form.Group>
      <ViewAddToCartButton />
    </div>
  )
}

export default ViewConfigurable
