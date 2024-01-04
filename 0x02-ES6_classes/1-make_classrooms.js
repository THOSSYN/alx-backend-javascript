import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const initRoom = [];
  const size1 = new ClassRoom(19);
  const size2 = new ClassRoom(20);
  const size3 = new ClassRoom(24);
  initRoom.push(size1);
  initRoom.push(size2);
  initRoom.push(size3);
  return initRoom;;
}
