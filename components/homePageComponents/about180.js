import "react-alice-carousel/lib/alice-carousel.css";

let products = [];

const responsive = {
    0: { items: 1 },
    1024: { items: 4 },
}



const NewRelease = () => {
    return (
        <>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40, marginBottom: 40, textAlign: 'center', fontSize: "1.28rem", fontWeight: 'lighter' }}>
                <h1>About 180 Smoke Vape Store</h1>
                <br />
                <p >Co-founded by Canadian heart surgeon Dr. Gopal Bhatnagar, 180 Smoke Vape Store comes from a background of medicine, technology, and philanthropy, converging into the perfect balance between disruptive and creative innovation.</p>
                <br />
                <p>We are an ethically-invested, socially-conscious, Canadian company with a focus on providing smokers an alternative to tobacco through our vaping products. We make switching to vaping easy by offering a wide selection of authentic products and dedicated customer support.</p>
                <br />
                <h1>Why E-Cigarettes, E-Liquids & Vaporizors</h1>
                <br />
                <p>E-cigarettes are electronic devices that vaporize a liquid solution (e-liquid) to produce vapour, simulating the experience of smoking without the element of combustion. E-cigarettes and e-liquid are an alternative to tobacco, and do not contain any tar, carbon monoxide, or other chemicals found in tobacco smoke.</p>
                <br />
                <p>Similarly, herbal or concentrate vaporizers provide a heat-not-combust alternative, allowing users, including patients, to avoid the potential side effects and drawbacks associated with smoking.</p>
            </div>
        </>
    )
}

export default NewRelease;