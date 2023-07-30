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
export declare type UsersCreateFormInputValues = {
    name?: string;
    college_level?: string;
    email?: string;
    password?: string;
    college?: string;
    major?: string;
    course_interests?: string;
};
export declare type UsersCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    college_level?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    college?: ValidationFunction<string>;
    major?: ValidationFunction<string>;
    course_interests?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersCreateFormOverridesProps = {
    UsersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    college_level?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    college?: PrimitiveOverrideProps<TextFieldProps>;
    major?: PrimitiveOverrideProps<TextFieldProps>;
    course_interests?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersCreateFormProps = React.PropsWithChildren<{
    overrides?: UsersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsersCreateFormInputValues) => UsersCreateFormInputValues;
    onSuccess?: (fields: UsersCreateFormInputValues) => void;
    onError?: (fields: UsersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersCreateFormInputValues) => UsersCreateFormInputValues;
    onValidate?: UsersCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsersCreateForm(props: UsersCreateFormProps): React.ReactElement;
