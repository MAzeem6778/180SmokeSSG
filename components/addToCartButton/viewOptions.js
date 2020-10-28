import React from 'react'
import ViewSimple from './viewSimple';
import ViewConfigurable from './viewConfigurable';
import ViewBundleView from './viewBundleView';

const types = {
    simple: 'SimpleProduct',
    configurable: 'ConfigurableProduct',
    bundle: 'BundleProduct'
};

const ViewOptions = ({ productType, options }) => {


    // if (productType == types.simple) {
    if (true) {
        return (
            <ViewSimple />
        )
    } else if (productType == types.configurable) {
        return (
            <ViewConfigurable options={options} />
        )
    } else if (productType == types.bundle) {
        return (
            <ViewBundleView />
        )
    }
}

export default ViewOptions
