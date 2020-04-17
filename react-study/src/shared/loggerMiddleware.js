const loggerMiddleware = store => next => action => {
    //현재 스토어의 상태
    console.log('현재 상태', store.getState())
    //현재 액션
    console.log('현재 액션', action)
    // 액셔을 다음 미들웨어, 혹은 리듀서로 전달
    const result = next(action)
    //다음 스토어의 상태
    console.log('다음 상태', store.getState())

    return result
}

export default loggerMiddleware
