import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import  { actionCreators }  from './store'
import {
    HeaderWrapper, 
    Logo, 
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">
                    <span className="iconfont">&#xe60a;</span>
                    首页
                </NavItem>
                <NavItem className="left">
                    <span className="iconfont">&#xe6d4;</span>
                    下载APP
                </NavItem>      
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition 
                        timeout={200} 
                        in={props.focused}
                        classNames="slide"
                    >
                        {/* slide-enter slide-enter-active slide-exit slide-exit-active*/}
                    <NavSearch 
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</span>
                </SearchWrapper>                   
            </Nav>

            <Addition>
                <Button className="writting">
                    <span className="iconfont">&#xe62e;</span>
                    写文章
                </Button>
                <Button className="reg">
                    注册
                </Button>
            </Addition>
        </HeaderWrapper>
    )
}

//把store里数据映射到state去
const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused') //immutable数据调用要用get
    }
}
//store.dispatch ===> props
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            // console.log('123');
            dispatch(actionCreators.searchFocus())           
        },

        handleBlur() {
            dispatch(actionCreators.searchBlur()) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)