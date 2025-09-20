import path from 'path';

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

// parse() - give an object with all those

console.log(path.parse(filePath));

// if we are using common.js __filename, __dirname is there

const __filename = url.fileURLToPath(import.meta.url); 
// import.meta.url gives like file://...
const __dirname = path.dirname(__filename);

// join()
//  user/, user\     
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// path.join():
// Purpose: path.join() concatenates path segments into a single, normalized path string. 
// It essentially acts like a smart string concatenation, ensuring correct
//  platform-specific separators are used and redundant separators are removed.
// Output: It produces a relative path unless one of the segments explicitly starts with a root directory.

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);

// path.resolve():
// Purpose: path.resolve() resolves a sequence of paths or path segments into an absolute path. It aims to construct a full, absolute path from the given segments, considering the current working directory if necessary. 
// Output: It always returns an absolute path.