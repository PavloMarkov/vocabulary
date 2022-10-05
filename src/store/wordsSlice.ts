import { createSlice } from '@reduxjs/toolkit';
import { Word } from '../types/Word';

export interface WordsState {
  words: Word[];
  results: number[];
}

const initialState: WordsState = {
  words: [],
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
    addTestResults(state, action) {
      state.results.push(action.payload);
    },
  },
});

export const {
  addDefaultWords, addWord, addTestResults,
} = wordsSlice.actions;

export default wordsSlice.reducer;
