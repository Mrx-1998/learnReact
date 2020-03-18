//将js转化为immutable
import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({ //将里面数据转为immutable，不可被修改
    topicList: [
    ],
    articleList: [
    ],
    recommendList: [    
    ],
    WriterList: [],
    articlePage: 1,
    showScroll: false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({//把多个对象合并成一个对象
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                WriterList: fromJS(action.WriterList)
            }) 
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state    
    }
}