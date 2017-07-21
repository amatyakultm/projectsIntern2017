import React, { Component } from 'react';
import _ from 'lodash'
import Color from './color'
import style from './style.css'

class Mapping extends Component {

    render() {

        const { data } = this.props
        const mapData = []
        return (
            <div className="box" style={{marginTop: '15px'}}>
                {
                    _.map(data, items => {
                        return (
                            <div style={{ float: 'left', marginRight: '10px', marginTop: '3px' }}>
                                <Color color={items.color} />
                                {
                                    items.id
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Mapping;
