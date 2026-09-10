import React, { forwardRef, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { UserGroupIcon } from '@heroicons/react/20/solid';
import { MultiSelect } from '../../MultiSelect';
import type {
    MultiSelectProps,
    MultiSelectReferenceProps,
    MultiDropdownPickerMeta,
    MultiDropdownPickerProps,
} from '../../models';
import { args, argTypes, parameters } from '../config';
import { MultiDropdownPicker } from '../../MultiDropdownPicker';
import { classes } from '../../../../utils';

const meta: Meta<typeof MultiSelect> = {
    title: 'Form Elements/MultiSelect/Examples',
    component: MultiSelect,
    argTypes,
    args,
    parameters,
};

type User = {
    id: string;
    name: string;
};

const data: User[] = [
    { id: '1', name: 'Alice Thompson' },
    { id: '2', name: 'Bob Smith' },
    { id: '3', name: 'Charlie Johnson' },
    { id: '4', name: 'David Brown' },
    { id: '5', name: 'Eve Davis' },
    { id: '6', name: 'Frank Miller' },
    { id: '7', name: 'Grace Wilson' },
    { id: '8', name: 'Hannah Moore' },
    { id: '9', name: 'Ivy Taylor' },
    { id: '10', name: 'Jack Anderson' },
    { id: '11', name: 'Karen White' },
    { id: '12', name: 'Larry Harris' },
    { id: '13', name: 'Megan Clark' },
    { id: '14', name: 'Nathan Lewis' },
    { id: '15', name: 'Olivia Walker' },
    { id: '16', name: 'Paul Hall' },
    { id: '17', name: 'Quincy Allen' },
    { id: '18', name: 'Rachel Young' },
    { id: '19', name: 'Samuel King' },
    { id: '20', name: 'Tina Wright' },
    { id: '21', name: 'Uma Scott' },
    { id: '22', name: 'Victor Green' },
    { id: '23', name: 'Wendy Adams' },
    { id: '24', name: 'Xander Baker' },
    { id: '25', name: 'Yvonne Carter' },
    { id: '26', name: 'Zachary Mitchell' },
    { id: '27', name: 'Amber Nelson' },
    { id: '28', name: 'Brian Perez' },
    { id: '29', name: 'Cynthia Roberts' },
    { id: '30', name: 'Derek Turner' },
];

const Reference = forwardRef<HTMLDivElement, MultiSelectReferenceProps<MultiDropdownPickerMeta<User>>>(
    ({ className, error, value, meta, disabled, size, isLoading, ...props }, ref) => {
        return (
            <div
                {...props}
                className={classes(
                    'inline-flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer',
                    className
                )}
                ref={ref}
            >
                <UserGroupIcon className="h-5 w-5 text-blue-500" />
            </div>
        );
    }
);

const readLabel: MultiDropdownPickerProps<User>['readLabel'] = user => `${user.name}`;
const readValue: MultiDropdownPickerProps<User>['readValue'] = user => user.id;

export const CustomReference: StoryFn<MultiSelectProps> = () => {
    const [value, setValue] = useState<User[]>([]);

    return (
        <MultiDropdownPicker
            value={value}
            items={data}
            searchable
            placeholder="Select users"
            offset={10}
            placement="right-start"
            readLabel={readLabel}
            readValue={readValue}
            components={{ Reference }}
            onChange={setValue}
        />
    );
};

export default meta;
