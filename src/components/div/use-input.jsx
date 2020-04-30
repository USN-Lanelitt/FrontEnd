/*Nicole har jobbet med denne siden*/

import { useState } from "react";

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

export default useInput;