
const CategoryDetails = ({details}) => {
    return (

        <div className='category-details' dangerouslySetInnerHTML={{__html: details}} />

        
    )
}

export default CategoryDetails;