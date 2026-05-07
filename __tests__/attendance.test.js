function calcPercent(attended, total) {
  if (total <= 0) return 0;
  return Number(((attended / total) * 100).toFixed(1));
}

function isLowAttendance(percent, threshold = 75) {
  return percent < threshold;
}

describe('Attendance Utilities', () => {

  test('calculates attendance percentage correctly', () => {
    expect(calcPercent(30, 40)).toBe(75.0);
    expect(calcPercent(20, 40)).toBe(50.0);
    expect(calcPercent(38, 40)).toBe(95.0);
  });

  test('returns 0 when total classes are 0', () => {
    expect(calcPercent(10, 0)).toBe(0);
  });

  test('flags attendance below threshold', () => {
    expect(isLowAttendance(74.9)).toBe(true);
    expect(isLowAttendance(75.0)).toBe(false);
    expect(isLowAttendance(80.0)).toBe(false);
  });

});