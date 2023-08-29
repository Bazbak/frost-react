import { useState } from "react";

const useModal = initialVisible => {
    if (!initialVisible) initialVisible = false;
    const [ visible, setVisible ] = useState(initialVisible);
    return [
        visible,
        () => setVisible(true),
        () => setVisible(false)
    ];
};

export default useModal;
