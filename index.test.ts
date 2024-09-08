import { marsRover } from './index';

test('Mars Rover moves correctly for multiple rovers', () => {
  const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

  const output = `1 3 N
5 1 E`;

  expect(marsRover(input)).toBe(output);
});

test('Rover stays within bounds (no out-of-bound moves)', () => {
  const input = `5 5
0 0 S
MMM
5 5 N
MMM`;

  const output = `0 0 S
5 5 N`;

  expect(marsRover(input)).toBe(output);
});

test('Rover rotates and stays in place with no move commands', () => {
  const input = `5 5
2 2 N
LRLRLRLR`;

  const output = `2 2 N`;

  expect(marsRover(input)).toBe(output);
});

test('Rover moves in a straight line and hits the edge of the grid', () => {
  const input = `5 5
4 4 E
MMMMM`;

  const output = `5 4 E`; // Rover moves to the right edge of the grid but can't move further

  expect(marsRover(input)).toBe(output);
});

test('Rover completes a full rotation (360 degrees)', () => {
  const input = `5 5
1 1 N
RRRRMMMM`;

  const output = `1 5 N`; // Rover rotates 360 degrees and moves north

  expect(marsRover(input)).toBe(output);
});

test('Rover moves out of the lower left corner but stays inside', () => {
  const input = `5 5
0 0 N
MMMM`;

  const output = `0 4 N`; // Rover moves north up to y=4

  expect(marsRover(input)).toBe(output);
});

test('Rover hits the top boundary and does not move further', () => {
  const input = `5 5
2 5 N
M`;

  const output = `2 5 N`; // Rover is already at the top, so it doesn't move further

  expect(marsRover(input)).toBe(output);
});
