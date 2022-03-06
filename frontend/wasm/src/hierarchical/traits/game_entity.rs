use crate::{aliases::Position, enums::StatusEffect};

pub trait GameEntity {
  fn new(name: &str, position: Position) -> Self;
  fn get_name(&self) -> &str;
  fn add_status(&mut self, effect: &StatusEffect, duration: f32);
  fn remove_status(&mut self, effect: &StatusEffect);
}
