/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Groups } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GroupsUpdateFormInputValues = {
    group_name?: string;
    group_description?: string;
    group_location?: string;
    college_major?: string;
};
export declare type GroupsUpdateFormValidationValues = {
    group_name?: ValidationFunction<string>;
    group_description?: ValidationFunction<string>;
    group_location?: ValidationFunction<string>;
    college_major?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupsUpdateFormOverridesProps = {
    GroupsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    group_name?: PrimitiveOverrideProps<TextFieldProps>;
    group_description?: PrimitiveOverrideProps<TextFieldProps>;
    group_location?: PrimitiveOverrideProps<TextFieldProps>;
    college_major?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GroupsUpdateFormProps = React.PropsWithChildren<{
    overrides?: GroupsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    groups?: Groups;
    onSubmit?: (fields: GroupsUpdateFormInputValues) => GroupsUpdateFormInputValues;
    onSuccess?: (fields: GroupsUpdateFormInputValues) => void;
    onError?: (fields: GroupsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupsUpdateFormInputValues) => GroupsUpdateFormInputValues;
    onValidate?: GroupsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GroupsUpdateForm(props: GroupsUpdateFormProps): React.ReactElement;
