use std::collections::HashMap;

use crate::{
  aliases::Position,
  hierarchical::traits::{GameEntity, GridAlignable},
};

#[derive(Default)]
pub struct Grid {
  map: HashMap<String, Position>,
}
impl Grid {
  pub fn add_object<G>(&mut self, object: &G)
  where
    G: GameEntity + GridAlignable,
  {
    self
      .map
      .insert(object.get_name().to_string(), *object.get_position());
  }

  pub fn remove_object<G>(&mut self, object: &mut G)
  where
    G: GameEntity + GridAlignable,
  {
    self.map.remove(object.get_name());
    object.move_to(&(0, 0))
  }

  pub fn move_object<G>(&mut self, object: &mut G, position: &Position)
  where
    G: GameEntity + GridAlignable,
  {
    self.map.remove(object.get_name());
    self.map.insert(object.get_name().to_string(), *position);
    object.move_to(position);
  }
}
