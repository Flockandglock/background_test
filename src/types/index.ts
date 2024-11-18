export interface ITypesComponents {
  value: string,
  name: string
}

export interface ITypesInputComponents {
  value: string,
  name: string
}

export interface IOptionTypeForCheckbox {
  id: string,
  value: string,
  checked: boolean
}


export interface IFieldForm {
  type: string,
  label: string,
  varietyComponent?: string
  id: string,
  required: boolean,
  optionType?: Array<string>,
  optionTypeCheckBox?: Array<IOptionTypeForCheckbox>
}