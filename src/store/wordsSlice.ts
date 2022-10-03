import { createSlice } from '@reduxjs/toolkit';
import { Word } from '../types/Word';

export interface WordsState {
  words: Word[];
  isCheckingWords: boolean;
  results: number[];
}

const initialState: WordsState = {
  words: [],
  isCheckingWords: false,
  results: [],
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addDefaultWords(state, action) {
      state.words.push(...action.payload);
    },
    addWord(state, action) {
      state.words.push({
        engWord: action.payload.engWord,
        translateWord: action.payload.translateWord,
      });
    },
    checkingTenWords(state) {
      // eslint-disable-next-line no-param-reassign
      state.isCheckingWords = !state.isCheckingWords;
    },
    addTestResults(state, action) {
      state.results.push(action.payload);
    },
  },
});

export const {
  addDefaultWords, addWord, checkingTenWords, addTestResults,
} = wordsSlice.actions;

export default wordsSlice.reducer;
