use crate::enums::{DamageType, StatusEffect};
use std::collections::HashMap;

pub type Position = (i32, i32);
pub type DamageMap = HashMap<DamageType, i32>;
pub type StatusMap = HashMap<StatusEffect, f32>;
