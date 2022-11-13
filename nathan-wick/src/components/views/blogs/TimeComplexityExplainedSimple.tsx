import { Helmet } from 'react-helmet';
import Header from '../../Header';
import Text from '../../Text';
import Heading from '../../Heading';
import CodeBlock from '../../CodeBlock';

const TimeComplexityExplainedSimple = (props: any) => {
    return (
        <>
            <Helmet>‍
                <title>Time Complexity Explained Simple</title>
                <meta name='description' content='Time Complexity Explained Simple.' />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <Header
                title='Time Complexity Explained Simple'
                subtitle='By Nathan Wick' />
            <Text
                text='Time complexity is the number of times a statement is executed. The lesser the Time Complexity, the faster the execution.' />
            <Heading
                text='O(1) - Constant Time Complexity' />
            <Text
                text='When time complexity is constant, the size of the input does not matter. This is the fastest time complexity.' />
            <CodeBlock
                text={`/*
    Constant Time Complexity Typescript Code Example
    By Nathan Wick
*/
           
const userId = 24;

// Log userId in the console
console.log("The user's id is " + userId);`} />
            <Heading
                text='O(n) - Linear Time Complexity' />
            <Text
                text='When time complexity is linear, the number of statement executions is proportional to the input (n) size.' />
            <CodeBlock
                text={`/*
    Linear Time Complexity Typescript Code Example
    By Nathan Wick
*/

const arrayOfNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// Loop through arrayOfNumbers (n)
arrayOfNumbers.forEach(currentNumber => {
    // Do something with currentNumber
});`} />
            <Heading
                text='O(log n) - Logarithmic Time Complexity' />
            <Text
                text='When time complexity is logarithmic, the number of statement executions is proportional to the logarithm of the input (n) size. Logarithmic time complexity happens when the algorithm does not need to go through all the input. This is accomplished by dividing the main problem into sub-problems, solving the sub-problems, and combining the sub-problem answers to the main problem. This is the second-fastest time complexity and is often used when constant time complexity is not achievable.' />
            <CodeBlock
                text={`/*
    Logarithmic Time Complexity Typescript Code Example
    By Nathan Wick
*/
            
const userIdToFind = 24;
const userIds = Array(100).fill(1).map((n, i) => n + i);
let start = 0;
let end = userIds.length - 1;

// Binary search through userIds (n) until userIdToFind is found
while (start <= end) {
    let middle = (start + end) / 2;
    if (valueToFind === userIds[middle]) {
        // userIdToFind is found
        return;
    } else if (userIdToFind < userIds[middle]) {
        // userIdToFind is somewhere between start and middle
        end = middle - 1;
    } else {
        // userIdToFind is somewhere between middle and end
        start = middle + 1;
    }
}`} />
            <Heading
                text='O(n^2) - Quadratic Time Complexity' />
            <Text
                text='When time complexity is quadratic, the number of statement executions is proportional to the square of the input (n) size. Algorithms with a quadratic time complexity don’t scale well and can typically be avoided with a better algorithm.' />
            <CodeBlock
                text={`/*
    Quadratic Time Complexity Typescript Code Example
    By Nathan Wick
*/

const natesFavCars = [ "Tesla", "BMW", "Chevrolet", "Mazda" ];
const johnsFavCars = [ "Audi", "Chevrolet", "Ford", "Bentley" ];

// Find the favorite cars (n) Nate and John have in common with a loop nested within another loop
for (int i = 0; i < nateFavCars.Length; i++) {
    for (int j = 0; j < johnFavCars.Length; j++) {
        if (nateFavCars[i] == johnFavCars[j]) {
            // Nate and John both like nateFavCars[i]
            return;
        } else {
            // nateFavCars[i] and johnFavCars[j] are not the same
        }
    }
}`} />
        </>
    );
};

export default TimeComplexityExplainedSimple;