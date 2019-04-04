/**
 * Importing react packages
 */
import React from "react";

/**
 * isArray function is used to check whether given variable is array or not
 */
function isArray(props) {
  const givenType = typeof props;
  const isArrayBooleanVal = props instanceof Array;
  return givenType && isArrayBooleanVal;
}
/**
 * findArrayLength function is used to find the length of an array
 */
function findArrayLength(props) {
  const findLength = props.length;
  return findLength;
}
/**
 * findArrayFirstElement function is used to find the first element of an array
 */
function findArrayFirstElement(props) {
  const findFirstElement = props[0];
  return findFirstElement;
}
/**
 * findArrayLastElement function is used to find the last element of an array
 */
function findArrayLastElement(props) {
  const findLastElement = props[props.length - 1];
  return findLastElement;
}
/**
 * findArrayMidElement function is used to find the mid element of an array
 */
function findOddArrayMidElement(props) {
  /**
   * odd length finder
   * used formula of `(n+1)/2` for finding the odd mid value
   */
  const findOddMidElement = props[(props.length + 1) / 2];
  return findOddMidElement;
}
/**
 * findEvenArrayMidElement function is used to find the mid element of an array
 */
function findEvenArrayMidElement(props) {
  /**
   * Even length finder
   * used formula of `(n/2)-1` for finding the odd mid value
   */
  const findEvenMidElement = props[props.length / 2 + 1];
  return findEvenMidElement;
}
/**
 * findArrayMidElement function is used to check and find the length is odd or even
 * after finding it should redirect to find the mid value to odd or even finder function
 */
function findArrayMidElement(props) {
  const findLength = findArrayLength(props);
  const findOddEven = findLength % 2;
  if (findOddEven) {
    return findOddArrayMidElement(props);
  } else {
    return findEvenArrayMidElement(props);
  }
}
/**
 * arrayClone function is used to clone the existing array
 */
function arrayClone(props) {
  const findClone = props.slice(0);
  return findClone;
}
/**
 * findArraySorting function is used to find the ascending order of an array
 */
function findArraySorting(props) {
  const clonedArray = arrayClone(props);
  const findSorting = clonedArray.sort();
  return findSorting;
}
/**
 * findArrayReverse function is used to find the descending order of an array
 */
function findArrayReverse(props) {
  const clonedArray = arrayClone(props);
  const findSorting = clonedArray.reverse();
  return findSorting;
}

/**
 * array manipulator
 * which returns an object of all array functionality possibilities
 */
function ArrayManipulation(props) {
  const findArrayManipulation = {
    arrayValue: props,
    isArray: isArray(props),
    findArrayLength: findArrayLength(props),
    findArrayFirstElement: findArrayFirstElement(props),
    findArrayLastElement: findArrayLastElement(props),
    findArrayMidElement: findArrayMidElement(props),
    findArraySorting: findArraySorting(props),
    findArrayReverse: findArrayReverse(props),
    arrayClone: arrayClone(props)
  };
  return findArrayManipulation;
}

export {
  ArrayManipulation,
  isArray,
  findArrayLength,
  findArrayFirstElement,
  findArrayLastElement,
  findOddArrayMidElement,
  findEvenArrayMidElement,
  findArrayMidElement,
  findArraySorting,
  findArrayReverse,
  arrayClone
};
export default { ArrayManipulation };
