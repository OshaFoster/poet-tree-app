import { call, put } from 'redux-saga/effects'
import { put, select } from 'redux-saga/effects'
import FirebaseActions, { AppDataSelectors } from '../Redux/AppRedux'
// import { db } from 'components/Initialize'

const { setWords } = FirebaseActions

export function * getInitialData () {
  // try {
  //   let wordsData = {}
  //   const words = yield call(() =>
  //     db
  //       .collection('words')
  //       .get()
  //       .then(querySnapshot => {
  //         querySnapshot.forEach(doc => {
  //           wordsData = {
  //             ...wordsData,
  //             ...doc.data(),
  //           }
  //         })
  //       })
  //       .then(() => wordsData),
  //   )
  //   yield put(setWords(words))
  // } catch (err) {
  //   console.log(err)
  // }
}