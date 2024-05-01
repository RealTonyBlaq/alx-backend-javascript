import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  sizes.forEach((maxStudentsSize) => ClassRoom(maxStudentsSize));
  
}
