export const COLORS = {
  RED: 0xf25346,
  BROWN: 0x59332e,
  PINK: 0xF5986E,
  DARK_BROWN: 0x23190f,
  LIGHT_BLUE: 0xe5f2f2,
  BLUE: 0x68c3c0,
  LIGHT_GREEN: 0x99ff99,
  GREEN: 0x33ff33,
  GRAY: 0xF8F8F0,
  WHITE: 0xfffafa,
  LIGHT_YELLOW: 0xFFFCCB,
  YELLOW: 0xFFFA97,
  BLACK: 0x000100,
};

export const EVENTS = {
  KEY_UP: 'keyup',
  KEY_DOWN: 'keydown',
  RESIZE: 'resize',
};

export const KEYS_CODES = {
  ARROW_UP: 'ArrowUp',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_DOWN: 'ArrowDown',
  ARROW_RIGHT: 'ArrowRight',
  SPACE: 'Space',
};

export const LANES = {
  LEFT: -4,
  CENTER: 0,
  RIGHT: 4,
};

// models
export const HERO = {
  RADIUS: 0.8,
  SIDES: 8,
  TIERS: 8,
  FLAT_SHADING: true,
  COLOR: COLORS.YELLOW,
  X: 0,
  Y: -3,
  Z: 1,
};

export const GLOBE = {
  RADIUS: 30,
  SIDES: 30,
  TIERS: 30,
  ROTATION_X: (0 * Math.PI) / 180,
  ROTATION_Y: (0 * Math.PI) / 180,
  ROTATION_Z: (90 * Math.PI) / 180,
  MAX_HEIGHT: 0.8,
  FLAT_SHADING: true,
  COLOR: COLORS.LIGHT_GREEN,
  X: 0,
  Y: -30,
  Z: -15,
};


// config
export const CAMERA = {
  NEAR: 1,
  FAR: 1000,
  X: 0,
  Y: -2,
  Z: 8,
  ROTATION_X: 0,
  ROTATION_Y: 0,
  ROTATION_Z: 0,
  FIELD_OF_VIEW: 60,
};

export const RENDERER = {
  ALPHA: true,
  ANTIALIAS: true,
  SHADOW_MAP: true,
};

export const CONTROLLER = {
  JUMP: false,
  SHOOT: false,
  GO_DOWN: false,
  COULD_JUMP: true,
  LANE: LANES.CENTER,
};

export const FOG = {
  DENSITY: 0.06,
  COLOR: COLORS.GRAY,
};

export const LIGHT = {
  FAR: CAMERA.FAR / 10,
  NEAR: CAMERA.NEAR,
  INTENSITY: 0.5,
  SKY_COLOR: COLORS.LIGHT_BLUE,
  GROUND_COLOR: COLORS.BLACK,
  SUN_LIGHT_COLOR: COLORS.LIGHT_YELLOW,
  SUN_DIRECTION_X: 30,
  SUN_DIRECTION_Y: 50,
  SUN_DIRECTION_Z: 30,
  SHADOW_RESOLUTION: 1024,
};

export const ANIMATION = {
  GRAVITY: 0.008,
  GLOBE_SPEED: 0.008,
  OBSTACLES_UPDATE_INTERVAL: 0.6,
  JUMP_VALUE: 0.2,
  BOUNCE_VALUE: 0.06,
  HERO_SPEED: (0.008 * GLOBE.RADIUS) / HERO.RADIUS / 5,
};

export const SCORE = {
  LIFES: 3,
  VALUE: 3 * 2,
  INCREASE_VALUE: 1,
  DECREASE_VALUE: 2,
};

export const OBSTACLES = {
  COUNT: 30,
};
