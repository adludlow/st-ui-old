import { admin } from '../constants';
const initialState = {
  syncStatus: 'never'
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case admin.SYNC_PLAYER_SUCCESS:
    {
      console.log('sync player success');
      return {
        syncStatus: 'success'
      }
    }
    case admin.SYNC_PLAYER_FAILURE:
    {
      console.log('sync player failed');
      return {
        syncStatus: 'failed'
      }
    }
  }
  return state;
}