import React, { useState } from 'react';
import DatePicker from './DatePicker';

export const MockDatepickerWithButton: React.FC<{
    initialValue: string | null | undefined;
    nextValue: string | null | undefined;
}> = ({ initialValue, nextValue }) => {
    const [selectedDate, setSelectedDate] = useState<string | null | undefined>(initialValue || '');

    return (
        <div>
            <DatePicker value={selectedDate || ''} type={'date'} onChange={e => setSelectedDate(e.target.value)} />
            <button data-testid={'button'} onClick={() => setSelectedDate(nextValue)} />
        </div>
    );
};
