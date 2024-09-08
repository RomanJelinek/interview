export function marsRover(input: string): string {
  const lines = input.trim().split('\n');

  // Parse plateau size
  const plateau = lines[0].split(' ').map(Number);
  const plateauX = plateau[0];
  const plateauY = plateau[1];

  // Helper to update direction based on rotation
  const directions = ['N', 'E', 'S', 'W'];

  function rotate(currentDirection: string, turn: string): string {
    let currentIndex = directions.indexOf(currentDirection);
    if (turn === 'L') {
      currentIndex = (currentIndex + 3) % 4; // 90 degrees left
    } else if (turn === 'R') {
      currentIndex = (currentIndex + 1) % 4; // 90 degrees right
    }
    return directions[currentIndex];
  }

  // Helper to move the rover forward
  function move(x: number, y: number, direction: string): [number, number] {
    switch (direction) {
      case 'N': return [x, y + 1];
      case 'E': return [x + 1, y];
      case 'S': return [x, y - 1];
      case 'W': return [x - 1, y];
      default: return [x, y];
    }
  }

  let output: string[] = [];

  // Process each rover
  for (let i = 1; i < lines.length; i += 2) {
    let [x, y, direction] = lines[i].split(' ');
    let posX = parseInt(x);
    let posY = parseInt(y);
    const instructions = lines[i + 1].split('');

    for (const instruction of instructions) {
      if (instruction === 'L' || instruction === 'R') {
        direction = rotate(direction, instruction);
      } else if (instruction === 'M') {
        const [newX, newY] = move(posX, posY, direction);
        // Check if new position is within plateau bounds
        if (newX >= 0 && newX <= plateauX && newY >= 0 && newY <= plateauY) {
          posX = newX;
          posY = newY;
        }
      }
    }

    output.push(`${posX} ${posY} ${direction}`);
  }

  return output.join('\n');
}
