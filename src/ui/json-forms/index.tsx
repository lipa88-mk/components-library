// Testers
import {
    inputTextControlTester,
    numberControlTester,
    integerControlTester,
    checkboxControlTester,
    dateControlTester,
    timeControlTester,
    datetimeControlTester,
    selectEnumControlTester,
    selectOneOfControlTester,
    multiselectOneOfControlTester,
    multiselectEnumControlTester,
    radioControlTester,
    checkboxListControlTester,
    labelControlTester,
    textAreaControlTester,
    textControlTester,
} from './controls';

// Controls
import { InputTextControl } from './controls';
import { InputNumberControl } from './controls';
import { InputIntegerControl } from './controls';
import { CheckboxControl } from './controls';
import { DateControl } from './controls';
import { SelectEnumControl } from './controls';
import { SelectOneOfControl } from './controls';
import { MultiSelectEnumControl } from './controls';
import { MultiSelectOneOfControl } from './controls';
import { RadioControl } from './controls';
import { CheckboxListControl } from './controls';
import { TextControl } from './controls';
import { TextAreaControl, LabelControl } from './controls';

export {
    InputTextControl,
    InputNumberControl,
    InputIntegerControl,
    CheckboxControl,
    DateControl,
    SelectEnumControl,
    SelectOneOfControl,
    MultiSelectEnumControl,
    MultiSelectOneOfControl,
    RadioControl,
    CheckboxListControl,
    TextControl,
    TextAreaControl,
    LabelControl,
};

const checkboxRenderer = { tester: checkboxControlTester, renderer: CheckboxControl };
export { checkboxRenderer };

const textInputRenderer = { tester: inputTextControlTester, renderer: InputTextControl };
export { textInputRenderer };

const numberInputRenderer = { tester: numberControlTester, renderer: InputNumberControl };
export { numberInputRenderer };

const integerInputRenderer = { tester: integerControlTester, renderer: InputIntegerControl };
export { integerInputRenderer };

const dateInputRenderer = { tester: dateControlTester, renderer: DateControl };
export { dateInputRenderer };

const timeInputRenderer = { tester: timeControlTester, renderer: DateControl };
export { timeInputRenderer };

const datetimeInputRenderer = { tester: datetimeControlTester, renderer: DateControl };
export { datetimeInputRenderer };

const selectEnumRenderer = { tester: selectEnumControlTester, renderer: SelectEnumControl };
export { selectEnumRenderer };

const selectOneOfRenderer = { tester: selectOneOfControlTester, renderer: SelectOneOfControl };
export { selectOneOfRenderer };

const multiselectEnumRenderer = { tester: multiselectEnumControlTester, renderer: MultiSelectEnumControl };
export { multiselectEnumRenderer };

const multiselectOneOfEnumRenderer = { tester: multiselectOneOfControlTester, renderer: MultiSelectOneOfControl };
export { multiselectOneOfEnumRenderer };

const RadioGroupRenderer = { tester: radioControlTester, renderer: RadioControl };
export { RadioGroupRenderer };

const CheckboxListRenderer = { tester: checkboxListControlTester, renderer: CheckboxListControl };
export { CheckboxListRenderer };

const textRenderer = { tester: textControlTester, renderer: TextControl };
export { textRenderer };

const labelRenderer = { tester: labelControlTester, renderer: LabelControl };
export { labelRenderer };

const textAreaRenderer = { tester: textAreaControlTester, renderer: TextAreaControl };
export { textAreaRenderer };

// Export All
const allRenderers = [
    textRenderer,
    checkboxRenderer,
    textInputRenderer,
    numberInputRenderer,
    integerInputRenderer,
    dateInputRenderer,
    timeInputRenderer,
    datetimeInputRenderer,
    selectEnumRenderer,
    selectOneOfRenderer,
    multiselectEnumRenderer,
    multiselectOneOfEnumRenderer,
    RadioGroupRenderer,
    CheckboxListRenderer,
    textAreaRenderer,
    labelRenderer,
];

export { allRenderers };

export { jsonFormsControl } from './jsonFormsControl';
export * from './models';
export { HorizontalLayoutRenderer, VerticalLayoutRenderer, GroupLayoutRenderer, ExpandLayoutRenderer } from './layouts';

export { FieldWrapper } from './controls';

export { useErrorsWithTouched } from './useErrorsWithTouched';
export {
    useJsonFormFieldDebouncedChange,
    useJsonFormNumericFieldDebouncedChangeCb,
    numericJsonFormDataToInputValue,
} from './helpers';
export { useJsonFormsInputChange, useJsonFormsErrorMessage } from './shared';
