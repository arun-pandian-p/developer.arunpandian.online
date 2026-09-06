import React from 'react';
import { ThemeStudio, ThemeStudioProps } from './ThemeStudio';

export type DesignOSEditorProps = ThemeStudioProps;
export const DesignOSEditor: React.FC<DesignOSEditorProps> = (props) => {
  return <ThemeStudio {...props} />;
};

export default DesignOSEditor;
