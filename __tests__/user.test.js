/* eslint-disable no-undef */
import User from './../src/js/user.js';

describe ('User', () => {

  let currentUser;

  beforeEach(() => {
    currentUser = new User(37, 77);
  });

test('should correctly create an object with earthAge property using the Object constructor', () => {
    expect(currentUser.earthAge).toEqual(37);
  });

test('should correctly create an object with lifeExpectancy property using the Object constructor', () => {
  expect(currentUser.lifeExpectancy).toEqual(77);
});

test('should correctly create an object with mercuryAge property using the Object constructor', () => {
  expect(currentUser.mercuryAge).toEqual(9);
});

test('should correctly create an object with venusAge property using the Object constructor', () => {
  expect(currentUser.venusAge).toEqual(23);
});

test('should correctly create an object with marsAge property using the Object constructor', () => {
  expect(currentUser.marsAge).toEqual(70);
});

test('should correctly create an object with jupiterAge property using the Object constructor', () => {
  expect(currentUser.jupiterAge).toEqual(439);
});

test('should correctly calculate life expectancy on mercury', () => {
  expect(currentUser.determineMercuryLifeExpectancy()).toEqual(10);
});

test('should correctly calculate life expectancy on venus', () => {
  expect(currentUser.determineVenusLifeExpectancy()).toEqual(25);
});

test('should correctly calculate life expectancy on mars', () => {
  expect(currentUser.determineMarsLifeExpectancy()).toEqual(76);
});

test('should correctly calculate life expectancy on jupiter', () => {
  expect(currentUser.determineJupiterLifeExpectancy()).toEqual(475);
});

});
