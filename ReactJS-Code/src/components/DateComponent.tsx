import React from 'react';

interface Props {
    isoDateTime: string;
}

function DateComponent({ isoDateTime }: Props) {
    const date = new Date(isoDateTime);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });

    return <span>{formattedDate}</span>;
}

export default DateComponent;
