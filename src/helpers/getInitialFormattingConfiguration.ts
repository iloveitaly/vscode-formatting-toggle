import { WorkspaceConfiguration } from 'vscode'
import { FORMATTING_SETTINGS } from '../constants'

export type FormattingConfiguration = {
  [formatOnPaste: string]: boolean
  formatOnSave: boolean
  formatOnType: boolean
}

const getInitialFormattingConfiguration = (
  editorConfiguration: WorkspaceConfiguration
): FormattingConfiguration => {
  const initialFormattingConfiguration: FormattingConfiguration = FORMATTING_SETTINGS.reduce(
    (configuration, setting) => {
      configuration[setting] = editorConfiguration.get(setting, false)

      return configuration
    },
    {} as FormattingConfiguration
  )

  return initialFormattingConfiguration
}

export default getInitialFormattingConfiguration
