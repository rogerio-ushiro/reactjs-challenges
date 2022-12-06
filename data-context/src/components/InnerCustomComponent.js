import { useContext } from 'react';
import { TitleData } from './LevelContext';

export default function InnerCustomComponent() {
    const title = useContext(TitleData);
    return (
        <b className="section">
            {title}
        </b>
    );
}
