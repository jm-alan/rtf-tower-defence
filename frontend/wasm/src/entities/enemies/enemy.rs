use crate::{
  aliases::{Position, StatusMap},
  enums::StatusEffect,
  hierarchical::traits::{GameEntity, GridAlignable},
};

pub struct Enemy {
  name: String,
  status_effects: StatusMap,
  position: Position,
}

impl GameEntity for Enemy {
  fn new(name: &str, position: Position) -> Self {
    Enemy {
      name: name.to_string(),
      status_effects: StatusMap::default(),
      position,
    }
  }

  fn get_name(&self) -> &str {
    &self.name
  }

  fn add_status(&mut self, effect: &StatusEffect, duration: f32) {
    self.status_effects.insert(*effect, duration);
  }

  fn remove_status(&mut self, effect: &StatusEffect) {
    self.status_effects.remove(effect);
  }
}

impl GridAlignable for Enemy {
  fn move_to(&mut self, position: &Position) {
    self.position = *position;
  }

  fn get_position(&self) -> &Position {
    &self.position
  }
}
