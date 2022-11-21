import React, { useCallback } from 'react';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const InputDate = ({ value, onChange }: Props) => {
    const handleChange = useCallback(
        (e) => onChange(e.target.value),
        [onChange]
    );

    return <input value={value} onChange={handleChange} />;
};

export default InputDate;
