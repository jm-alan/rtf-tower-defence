use crate::aliases::Position;

pub trait GridAlignable {
  fn move_to(&mut self, position: &Position);
  fn get_position(&self) -> &Position;
}
