import { useContext } from 'react';

// Hooks
import { useTags } from '../hooks';

// Helpers
import { getTagIcon, fetchify } from '../helpers';
import { Context } from '../lib/selectedTagContext';

// Mock data
// import icons from '../mock-data/tags.json'; // импорт названий тэгов

export const Tags = () => {
    const { data, isFetched } = useTags();
    const [selectedTagId, setSelectedTagId] = useContext(Context);
    const tagsJSX = data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        const handleClick = () => {
            setSelectedTagId(id);
        };


        return (
            <span
                data-active = { setSelectedTagId === id }
                key = { id }
                className = 'tag'
                onClick = { handleClick }>

                <TagIcon />
                { name }
            </span>
        );
    });

    return (
        <div className = 'tags'>
            { fetchify(isFetched, tagsJSX) }

        </div>
    );
};
