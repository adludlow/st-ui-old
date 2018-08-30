import { admin } from '../constants';

export function syncPlayers() {
  console.log('syncPlayers');

  return {
    type: admin.SYNC_PLAYER_SUCCESS,
    result: 'success'
  }
};