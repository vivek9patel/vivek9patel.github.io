import { render, screen } from '@testing-library/react';
import App from './App';
import calc from './components/apps/calc';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const cal = new calc();

test('25+6',()=>{
  let ans = cal.evaluteExp('25+6');
  expect(ans).toBe(31);
})
test('25%6',()=>{
  let ans = cal.evaluteExp('25%6');
  expect(ans).toBe(1);
})
test('25/6',()=>{
  let ans = cal.evaluteExp('25/6');
  expect(ans).toBe(4.166666666666667);
})
test('25-6',()=>{
  let ans = cal.evaluteExp('25-6');
  expect(ans).toBe(19);
})
test('25*6',()=>{
  let ans = cal.evaluteExp('25*6');
  expect(ans).toBe(150);
})
test('x=1',()=>{
  let ans = cal.evaluteExp('x=1');
  expect(ans).toBe(1);
})


test('1920/16*9',()=>{
  let ans = cal.evaluteExp('1920/16*9');
  expect(ans).toBe(1080);
})

test('2^32',()=>{
  let ans = cal.evaluteExp('2^32 ');
  expect(ans).toBe(4294967296);
})

test('12/5*9+9.4*2',()=>{
  let ans = cal.evaluteExp('12/5*9+9.4*2');
  expect(ans).toBe(40.4);
})

test('19*(45%5)*((2/3)-(2/3))',()=>{
  let ans = cal.evaluteExp('19*(45%5)*((2/3)-(2/3))');
  expect(ans).toBe(0);
})

test('sqrt(1.4^2 + 1.5^2)',()=>{
  let ans = cal.evaluteExp('sqrt(1.4^2 + 1.5^2) ');
  expect(ans).toBe(2.0518284528683193);
})

test('22^22',()=>{
  let ans = cal.evaluteExp('22^22');
  expect(ans).toBe(3.4142787736421956e+29
    );
})
test('sin[90]',()=>{
  let ans = cal.evaluteExp('sin[90]');
  expect(ans).toBe(0.8939966636005579);
})
test('cos[0]',()=>{
  let ans = cal.evaluteExp('cos[0]');
  expect(ans).toBe(1);
})
test('fac(2)',()=>{
  let ans = cal.evaluteExp('fac(4)');
  expect(ans).toBe(24);
})
test('max(8,9)',()=>{
  let ans = cal.evaluteExp('max(8,9)');
  expect(ans).toBe(9);
})
test('min(8,9)',()=>{
  let ans = cal.evaluteExp('min(8,9)');
  expect(ans).toBe(8);
})
test('34b',()=>{
  let ans = cal.evaluteExp('34b');
  expect(ans).toBe('Invalid Expression');
})
test('290^',()=>{
  let ans = cal.evaluteExp('290^');
  expect(ans).toBe('Invalid Expression');
})
test('y+z',()=>{
  let ans = cal.evaluteExp('y+z');
  expect(ans).toBe('undefined variable: y');
})