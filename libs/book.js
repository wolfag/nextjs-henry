import fs from 'fs';
import path from 'path';

const booksDir = path.join(process.cwd(), 'books');

export const getBooks = () => {
  const bookFilenames = fs.readdirSync(booksDir);
  const booksData = bookFilenames.map((bookFilename) => {
    const fullBookPath = path.join(booksDir, bookFilename);
    const bookContent = fs.readFileSync(fullBookPath, 'utf8');

    return {
      bookName: bookFilename.replace(/\.txt$/, ''),
      bookContent,
    };
  });

  return booksData;
};
