<h1>React's Data Context</h1>

Sharing data between components through the use of react context.


![result](../doc.imgs/data-context.png "result")

Description:


The first header text ("I'm a traveler data") was taken from the shared data called "LevelContext" file.

```
import { createContext } from 'react';
export const TitleData = createContext("I'm a data traveler");
```

The text is shown on this page by getting the data from "LevelContext" file.

```
import { useContext } from 'react';
import { TitleData } from './LevelContext';

export default function InnerCustomComponent() {
    const title = useContext(TitleData);                // get data from LevelContext
    return (
        <b className="section">
            {title}
        </b>
    );
}

```