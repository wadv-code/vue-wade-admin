import type { Component, InputHTMLAttributes } from 'vue';
import type { ZodAny, z } from 'zod';
import type { INPUT_COMPONENTS } from './constant';

export interface FieldProps {
  fieldName: string;
  label?: string;
  required?: boolean;
  config?: ConfigItem;
  disabled?: boolean;
}

export interface Shape {
  type: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  default?: any;
  required?: boolean;
  options?: string[];
  schema?: ZodAny;
}

export interface InputComponents {
  date: Component;
  select: Component;
  radio: Component;
  checkbox: Component;
  switch: Component;
  textarea: Component;
  number: Component;
  string: Component;
  file: Component;
  array: Component;
  object: Component;
}

export interface ConfigItem {
  /** Value for the `FormLabel` */
  label?: string;
  /** Value for the `FormDescription` */
  description?: string;
  /** Pick which component to be rendered. */
  component?: keyof typeof INPUT_COMPONENTS | Component;
  /** Hide `FormLabel`. */
  hideLabel?: boolean;
  inputProps?: InputHTMLAttributes;
}

// Define a type to unwrap an array
type UnwrapArray<T> = T extends (infer U)[] ? U : never;

export type Config<SchemaType extends object> = {
  // If SchemaType.key is an object, create a nested Config, otherwise ConfigItem
  [Key in keyof SchemaType]?: // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  SchemaType[Key] extends any[]
    ? UnwrapArray<Config<SchemaType[Key]>>
    : SchemaType[Key] extends object
      ? Config<SchemaType[Key]>
      : ConfigItem;
};

export enum DependencyType {
  DISABLES = 0,
  REQUIRES = 1,
  HIDES = 2,
  SETS_OPTIONS = 3,
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
interface BaseDependency<SchemaType extends z.infer<z.ZodObject<any, any>>> {
  sourceField: keyof SchemaType;
  type: DependencyType;
  targetField: keyof SchemaType;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  when: (sourceFieldValue: any, targetFieldValue: any) => boolean;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type ValueDependency<SchemaType extends z.infer<z.ZodObject<any, any>>> =
  BaseDependency<SchemaType> & {
    type:
      | DependencyType.DISABLES
      | DependencyType.REQUIRES
      | DependencyType.HIDES;
  };

export type EnumValues = readonly [string, ...string[]];

export type OptionsDependency<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  SchemaType extends z.infer<z.ZodObject<any, any>>,
> = BaseDependency<SchemaType> & {
  type: DependencyType.SETS_OPTIONS;

  // Partial array of values from sourceField that will trigger the dependency
  options: EnumValues;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type Dependency<SchemaType extends z.infer<z.ZodObject<any, any>>> =
  | ValueDependency<SchemaType>
  | OptionsDependency<SchemaType>;
