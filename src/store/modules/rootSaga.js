import { all } from 'redux-saga/effects'
import reserve from './reservas/sagas'

export default function* rootSaga(){
    return yield all([
        reserve,
    ])
}
