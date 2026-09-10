import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';
import {
    HorizontalLayoutRenderer,
    horizontalLayoutTester,
    VerticalLayoutRenderer,
    verticalLayoutTester,
    groupLayoutTester,
    GroupLayoutRenderer,
    ExpandLayoutRenderer,
    expandLayoutTester,
    categorizationLayoutTester,
    CategorizationLayoutRenderer,
} from './layouts';
import {
    CheckboxControl,
    checkboxControlTester,
    DateControl,
    dateControlTester,
    timeControlTester,
    datetimeControlTester,
    InputIntegerControl,
    InputNumberControl,
    InputTextControl,
    inputTextControlTester,
    numberControlTester,
    integerControlTester,
    MultiSelectEnumControl,
    multiselectEnumControlTester,
    MultiSelectOneOfControl,
    multiselectOneOfControlTester,
    SelectEnumControl,
    selectEnumControlTester,
    SelectOneOfControl,
    selectOneOfControlTester,
    RadioControl,
    radioControlTester,
    CheckboxListControl,
    checkboxListControlTester,
    TextAreaControl,
    textAreaControlTester,
    LabelControl,
    labelControlTester,
} from './controls';
import { TextControl, textControlTester } from './controls';

export const renderers = [
    ...vanillaRenderers,
    { tester: checkboxControlTester, renderer: CheckboxControl },

    { tester: textControlTester, renderer: TextControl },
    { tester: labelControlTester, renderer: LabelControl },
    { tester: inputTextControlTester, renderer: InputTextControl },
    { tester: textAreaControlTester, renderer: TextAreaControl },
    { tester: numberControlTester, renderer: InputNumberControl },
    { tester: integerControlTester, renderer: InputIntegerControl },

    { tester: dateControlTester, renderer: DateControl },
    { tester: timeControlTester, renderer: DateControl },
    { tester: datetimeControlTester, renderer: DateControl },

    { tester: selectEnumControlTester, renderer: SelectEnumControl },
    { tester: selectOneOfControlTester, renderer: SelectOneOfControl },
    { tester: radioControlTester, renderer: RadioControl },

    { tester: multiselectEnumControlTester, renderer: MultiSelectEnumControl },
    { tester: multiselectOneOfControlTester, renderer: MultiSelectOneOfControl },
    { tester: checkboxListControlTester, renderer: CheckboxListControl },

    { tester: verticalLayoutTester, renderer: VerticalLayoutRenderer },
    { tester: horizontalLayoutTester, renderer: HorizontalLayoutRenderer },
    { tester: groupLayoutTester, renderer: GroupLayoutRenderer },
    { tester: expandLayoutTester, renderer: ExpandLayoutRenderer },
    { tester: categorizationLayoutTester, renderer: CategorizationLayoutRenderer },
];

export const cells = [...vanillaCells];
