it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 200000,
    years: 30,
    rate: 6.95,
  };
  expect(calculateMonthlyPayment(values)).toEqual(1323.89);
});

it('should return a result with no more than 2 decimal places', function () {
  const values = {
    amount: 300000,
    years: 15,
    rate: 8.95,
  };
  expect(calculateMonthlyPayment(values)).toEqual(3033.88);
});

describe('invalid entry tests', () => {
  it('should handle invalid entry', function () {
    expect(() => userLnAmnt('adsofgkjnadfsg')).toThrowError();
    expect(() => userLnYrs(':{{!!')).toThrowError();
    expect(() => userLnRt('ad346dsfhw5r756!')).toThrowError();
  });
});
