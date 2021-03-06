function ProductList(props) {

    const productDetails = props.products.map((p, i) => {
        return <ProductDetail
            addToCart={props.addToCart}
            key={i}
            product={p} />
    });

    return <div>{productDetails}</div>
}

ProductList.propTypes = {
    addToCart: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}