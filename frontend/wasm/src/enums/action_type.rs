#[derive(Copy, Clone, Hash, PartialEq, Eq)]
pub enum BasicActionType {
  MouseDown,
  MouseUp,
  Drag,
  DragStart,
  DragStop,
  KeyDown,
  KeyUp,
}
