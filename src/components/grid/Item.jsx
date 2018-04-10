import React from 'react'
import T from 'prop-types'

const Item = ({children, className}) => <div className={`lr-o-grid__item ${className}`}>
    {children}
</div>

Item.propTypes = {
    children: T.node,
    className: T.string
}

Item.defaultProps = {
    children: null,
    className: ''
}

export default Item;