const config = {
  port: process.env.PORT || 4000,
  initialElevatorCount: 2,
};

export const getConfig = () => config;
