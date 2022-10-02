import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from './index';

// Use these hooks everywhere instead of useDispatch and useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
