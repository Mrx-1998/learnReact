import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="selectNum">
                    <ul>
                        <li>
                            <p>4排3座</p>
                            <p>42.7元</p>
                        </li>
                        
                        <li>
                            <p>4排3座</p>
                            <p>42.7元</p>
                        </li>
                    </ul>
                </div>
                <div className='selector'>请选座</div>
            </footer>
        )
    }
}
