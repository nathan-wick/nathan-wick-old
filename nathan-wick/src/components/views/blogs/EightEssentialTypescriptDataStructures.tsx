import { Helmet } from 'react-helmet';
import Header from '../../Header';
import Text from '../../Text';
import Heading from '../../Heading';
import CodeBlock from '../../CodeBlock';
import StackImage from '../../../assets/images/data-structures/stack.webp'
import QueueImage from '../../../assets/images/data-structures/queue.webp';
import ArrayImage from '../../../assets/images/data-structures/array.webp';
import HashTableImage from '../../../assets/images/data-structures/hash-table.webp';
import LinkedListImage from '../../../assets/images/data-structures/linked-list.webp';
import TreeImage from '../../../assets/images/data-structures/tree.webp';
import TrieImage from '../../../assets/images/data-structures/trie.webp';
import GraphImage from '../../../assets/images/data-structures/graph.webp';

const EightEssentialTypescriptDataStructures = (props: any) => {
    return (
        <>
            <Helmet>‍
                <title>8 Essential Typescript Data Structures</title>
                <meta name='description' content='8 Essential Typescript Data Structures.' />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <Header
                title='8 Essential Typescript Data Structures'
                subtitle='By Nathan Wick' />
            <Heading
                text='Stack'
                isMobile={props.isMobile} />
            <Text
                text='Stacks are implemented on the Last In First Out (LIFO) basis. A Stack has 2 operations: Push and Pop. Push, adds an element to the top of the collection. Pop, removes an element from the top of the collection.'
                isMobile={props.isMobile} />
            <div
                className='text-center'>
                <img
                    className={`${props.isMobile ? `w-100` : `w-50`} rounded p-3`}
                    src={StackImage}
                    alt='Stack Data Structure by Nathan Wick'>
                </img>
            </div>
            <CodeBlock
                text={`const numbers = new Stack<number>();

numbers.push(1);
numbers.push(2);

// Output: 1, 2
console.log(numbers);

const topNumber = numbers.pop();

// Output: 2
console.log(topNumber);

// Output: 1
console.log(numbers);`}
                isMobile={props.isMobile} />
            <Heading
                text='Queue'
                isMobile={props.isMobile} />
            <Text
                text='Queues are implemented on the First In First Out (FIFO) basis. A Queue has 2 operations: Enqueue and Dequeue. Enqueue, adds an element to the back of the collection. Dequeue, removes an element from the front of the collection.'
                isMobile={props.isMobile} />
            <div
                className='text-center'>
                <img
                    className={`${props.isMobile ? `w-100` : `w-50`} rounded p-3`}
                    src={QueueImage}
                    alt='Queue Data Structure by Nathan Wick'>
                </img>
            </div>
            <CodeBlock
                text={`const numbers = new Queue<number>();

numbers.enqueue(1);
numbers.enqueue(2);

// Output: 1, 2
console.log(numbers);

const frontNumber = numbers.dequeue();

// Output: 1
console.log(frontNumber);

// Output: 2
console.log(numbers);`}
                isMobile={props.isMobile} />
            <Heading
                text='Array'
                isMobile={props.isMobile} />
            <Text
                text='Arrays store data of a defined type with a fixed size. With an Array, data can be accessed anywhere.'
                isMobile={props.isMobile} />
            <div
                className='text-center'>
                <img
                    className={`${props.isMobile ? `w-100` : `w-50`} rounded p-3`}
                    src={ArrayImage}
                    alt='Array Data Structure by Nathan Wick'>
                </img>
            </div>
            <CodeBlock
                text={`const numbers: number[] = [ 1, 2, 3 ];

// Output: 1, 2, 3
console.log(numbers);

// Output: 1
console.log(numbers[0]);
// Output: 3
console.log(numbers[2]);

numbers[1] = 4;

// Output: 1, 4, 3
console.log(numbers)`}
                isMobile={props.isMobile} />
            <Heading
                text='Hash Table'
                isMobile={props.isMobile} />
            <Text
                text='Hash Tables store a key and value pair. Hash Tables are helpful when there is a need to search for a value. This is because values can be found with a key instead of a loop.'
                isMobile={props.isMobile} />
            <div
                className='text-center'>
                <img
                    className={`${props.isMobile ? `w-100` : `w-50`} rounded p-3`}
                    src={HashTableImage}
                    alt='Hash Table Data Structure by Nathan Wick'>
                </img>
            </div>
            <CodeBlock
                text={`const names = new HashTable(3);

names.insert(5646);
names.insert(6283);
names.insert(1413);

// Output: Nate
console.log(names.search(6283));`}
                isMobile={props.isMobile} />
            <Heading
                text='Linked List'
                isMobile={props.isMobile} />
            <Text
                text='Linked Lists are a collection of nodes. Each node consists of 2 fields, information and the address of the next node.'
                isMobile={props.isMobile} />
            <div
                className='text-center'>
                <img
                    className={`${props.isMobile ? `w-100` : `w-50`} rounded p-3`}
                    src={LinkedListImage}
                    alt='Linked List Data Structure by Nathan Wick'>
                </img>
            </div>
            <CodeBlock
                text={`const car = new LinkedList();

car.insert('2000');
car.insert('BMW');
car.insert('Z3');
car.insert('2.3');

// Output: BMW, Z3
console.log(car.search('BMW'));`}
                isMobile={props.isMobile} />
            <Heading
                text='Tree'
                isMobile={props.isMobile} />
            <Text
                text='Trees are a collection of nodes. Each node consists of a value and references to other nodes. Unlike a Linked List node, a Tree node can reference multiple other nodes.'
                isMobile={props.isMobile} />
            <div
                className='text-center'>
                <img
                    className={`${props.isMobile ? `w-100` : `w-50`} rounded p-3`}
                    src={TreeImage}
                    alt='Tree Data Structure by Nathan Wick'>
                </img>
            </div>
            <CodeBlock
                text={`const family = new BinaryTree();

family.insert([ 'Larry', 'Chad', 'Jeremy', 'Nate', 'John', 'Maggie', 'Dalton' ]);

// Output: Larry, Chad, Nate, John, Jeremy, Maggie, Dalton
console.log(family.inOrder());`}
                isMobile={props.isMobile} />
            <Heading
                text='Trie'
                isMobile={props.isMobile} />
            <Text
                text='Trees are a collection of nodes. Tries store data step-by-step so data can easily be searched. Each node in a Trie has an alphabet and following the branch can form a complete word.'
                isMobile={props.isMobile} />
            <div
                className='text-center'>
                <img
                    className={`${props.isMobile ? `w-100` : `w-50`} rounded p-3`}
                    src={TrieImage}
                    alt='Trie Data Structure by Nathan Wick'>
                </img>
            </div>
            <CodeBlock
                text={`const wordMap = new Trie();

wordMap.insert('as');
wordMap.insert('at');
wordMap.insert('bat');
wordMap.insert('cap');
wordMap.insert('cat');

// Output: True
console.log(wordMap.search('cat'));`}
                isMobile={props.isMobile} />
            <Heading
                text='Graph'
                isMobile={props.isMobile} />
            <Text
                text='Graphs are a collection of nodes. Each node stores a list of adjacent nodes. Graphs are special because they can be circular, disconnected, and/or undirected.'
                isMobile={props.isMobile} />
            <div
                className='text-center'>
                <img
                    className={`${props.isMobile ? `w-100` : `w-50`} rounded p-3`}
                    src={GraphImage}
                    alt='Graph Data Structure by Nathan Wick'>
                </img>
            </div>
            <CodeBlock
                text={`const streets = new Graph();

streets.addVertex('Main');
streets.addVertex('1st');
streets.addVertex('2nd');
streets.addVertex('3rd');
streets.addVertex('Shady');
streets.addVertex('Maple');
streets.addVertex('Ash');

streets.addEdge('1st', 'Main');
streets.addEdge('Main', '3rd');
streets.addEdge('3rd', 'Ash');
streets.addEdge('3rd', 'Maple');
streets.addEdge('Maple', 'Shady');
streets.addEdge('Shady', '1st');
streets.addEdge('Maple', '2nd');
streets.addEdge('2nd', 'Main');

// Output: 1st, Main, 3rd, Ash
console.log(streets.search({ start: '1st', finish: 'Ash' }));`}
                isMobile={props.isMobile} />
        </>
    );
};

export default EightEssentialTypescriptDataStructures;