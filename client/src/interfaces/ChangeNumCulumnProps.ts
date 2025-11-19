export interface ChangeNumCulumnProps {
  gridColumns: number;
  setGridColumns: React.Dispatch<React.SetStateAction<number>>;
  numColumnsToAdd?: number;
  numColumnsToRemove?: number;
}
