/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GroupsCreateFormInputValues = {
    group_name?: string;
    group_description?: string;
    group_location?: string;
    college_major?: string;
};
export declare type GroupsCreateFormValidationValues = {
    group_name?: ValidationFunction<string>;
    group_description?: ValidationFunction<string>;
    group_location?: ValidationFunction<string>;
    college_major?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupsCreateFormOverridesProps = {
    GroupsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    group_name?: PrimitiveOverrideProps<TextFieldProps>;
    group_description?: PrimitiveOverrideProps<TextFieldProps>;
    group_location?: PrimitiveOverrideProps<TextFieldProps>;
    college_major?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupsCreateFormProps = React.PropsWithChildren<{
    overrides?: GroupsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GroupsCreateFormInputValues) => GroupsCreateFormInputValues;
    onSuccess?: (fields: GroupsCreateFormInputValues) => void;
    onError?: (fields: GroupsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupsCreateFormInputValues) => GroupsCreateFormInputValues;
    onValidate?: GroupsCreateFormValidationValues;
} & React.CSSProperties>;
export default function GroupsCreateForm(props: GroupsCreateFormProps): React.ReactElement;
