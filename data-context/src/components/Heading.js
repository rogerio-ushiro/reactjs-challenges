import InnerCustomComponent from './InnerCustomComponent';

export default function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children} <InnerCustomComponent /></h1>;
    case 2:
      return <h1>{children} {level} </h1>;
    case 3:
      return <h1>{children} {level} </h1>;
    case 4:
      return <h1>{children} {level} </h1>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
