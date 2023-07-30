/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Groups } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function GroupsUpdateForm(props) {
  const {
    id: idProp,
    groups: groupsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    group_name: "",
    group_description: "",
    group_location: "",
    college_major: "",
  };
  const [group_name, setGroup_name] = React.useState(initialValues.group_name);
  const [group_description, setGroup_description] = React.useState(
    initialValues.group_description
  );
  const [group_location, setGroup_location] = React.useState(
    initialValues.group_location
  );
  const [college_major, setCollege_major] = React.useState(
    initialValues.college_major
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = groupsRecord
      ? { ...initialValues, ...groupsRecord }
      : initialValues;
    setGroup_name(cleanValues.group_name);
    setGroup_description(cleanValues.group_description);
    setGroup_location(cleanValues.group_location);
    setCollege_major(cleanValues.college_major);
    setErrors({});
  };
  const [groupsRecord, setGroupsRecord] = React.useState(groupsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Groups, idProp)
        : groupsModelProp;
      setGroupsRecord(record);
    };
    queryData();
  }, [idProp, groupsModelProp]);
  React.useEffect(resetStateValues, [groupsRecord]);
  const validations = {
    group_name: [],
    group_description: [],
    group_location: [],
    college_major: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          group_name,
          group_description,
          group_location,
          college_major,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Groups.copyOf(groupsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GroupsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Group name"
        isRequired={false}
        isReadOnly={false}
        value={group_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              group_name: value,
              group_description,
              group_location,
              college_major,
            };
            const result = onChange(modelFields);
            value = result?.group_name ?? value;
          }
          if (errors.group_name?.hasError) {
            runValidationTasks("group_name", value);
          }
          setGroup_name(value);
        }}
        onBlur={() => runValidationTasks("group_name", group_name)}
        errorMessage={errors.group_name?.errorMessage}
        hasError={errors.group_name?.hasError}
        {...getOverrideProps(overrides, "group_name")}
      ></TextField>
      <TextField
        label="Group description"
        isRequired={false}
        isReadOnly={false}
        value={group_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              group_name,
              group_description: value,
              group_location,
              college_major,
            };
            const result = onChange(modelFields);
            value = result?.group_description ?? value;
          }
          if (errors.group_description?.hasError) {
            runValidationTasks("group_description", value);
          }
          setGroup_description(value);
        }}
        onBlur={() =>
          runValidationTasks("group_description", group_description)
        }
        errorMessage={errors.group_description?.errorMessage}
        hasError={errors.group_description?.hasError}
        {...getOverrideProps(overrides, "group_description")}
      ></TextField>
      <TextField
        label="Group location"
        isRequired={false}
        isReadOnly={false}
        value={group_location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              group_name,
              group_description,
              group_location: value,
              college_major,
            };
            const result = onChange(modelFields);
            value = result?.group_location ?? value;
          }
          if (errors.group_location?.hasError) {
            runValidationTasks("group_location", value);
          }
          setGroup_location(value);
        }}
        onBlur={() => runValidationTasks("group_location", group_location)}
        errorMessage={errors.group_location?.errorMessage}
        hasError={errors.group_location?.hasError}
        {...getOverrideProps(overrides, "group_location")}
      ></TextField>
      <TextField
        label="College major"
        isRequired={false}
        isReadOnly={false}
        value={college_major}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              group_name,
              group_description,
              group_location,
              college_major: value,
            };
            const result = onChange(modelFields);
            value = result?.college_major ?? value;
          }
          if (errors.college_major?.hasError) {
            runValidationTasks("college_major", value);
          }
          setCollege_major(value);
        }}
        onBlur={() => runValidationTasks("college_major", college_major)}
        errorMessage={errors.college_major?.errorMessage}
        hasError={errors.college_major?.hasError}
        {...getOverrideProps(overrides, "college_major")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || groupsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || groupsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
