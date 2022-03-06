use crate::{aliases::DamageMap, enums::status_effect::StatusEffect};

pub struct Damage {
  amounts: DamageMap,
  status_effects: Vec<StatusEffect>,
}
